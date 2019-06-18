import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private handleError: HandleError;

  constructor(private http: HttpClient, private router: Router, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AuthService');
  }

  static haveJwt(): boolean {
    return !!localStorage.getItem('token');
  }

  validateJwt() {
    return this.http.get('http://localhost:8080/whoami', {observe: 'response'}).pipe(
      catchError(this.handleError('authentication', []))
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
