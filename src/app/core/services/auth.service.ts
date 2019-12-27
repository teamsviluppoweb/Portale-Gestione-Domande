import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

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

  validateJwt(): Observable<any> {
    return this.http.get(environment.endpoint.listaConcorsi, {observe: 'response'}).pipe(
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
