import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService, HandleError, HttpErrorHandler} from '../services';
import {catchError, first, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  private handleError: HandleError;

  constructor(private auth: AuthService, httpErrorHandler: HttpErrorHandler, private router: Router) {
    this.handleError = httpErrorHandler.createHandleError('AuthGuard');
  }

  canActivate(): Observable<any> | boolean {
    if (AuthService.haveJwt()) {
      return this.auth.validateJwt().pipe(
        map( (response) => {
          if (response.status === 200) {
            return true;
          }
        }),
        catchError((err: Response) => {
          this.handleError('authentication');
          if (err.status === 200) {
            return of(true);
          }

          this.router.navigate(['auth/login']);
          return of(false);
        }),
        first()
      );
    } else {
      return false;
    }
  }

}
