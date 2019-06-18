import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {AuthService} from '../services';
import {catchError, first, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService) {}

  canActivate(): Observable<any> | boolean {
    if (AuthService.haveJwt()) {
      return this.auth.validateJwt().pipe(
        map( (response) => {
          if (response.status === 200) {
            return true;
          }
        }),
        catchError((err: Response) => {
          if (err.status === 200) {
            return of(true);
          }

          return of(false);
        }),
        first()
      );
    } else {
      return false;
    }
  }

}
