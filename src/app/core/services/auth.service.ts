import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  static haveJwt(): boolean {
    return !!localStorage.getItem('token');
  }

  validateJwt() {
    return this.http.get('http://localhost:8080/whoami', {observe: 'response'});
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
