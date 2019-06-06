import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Concorso, Domanda} from '../models';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) {

  }

  getListaConcorsi(): Observable<Concorso[]> {
    return this.http.get<Concorso[]>('http://localhost:8080/concorsi');
  }

  getListaDomandeConcorso(id: number): Observable<Domanda[]> {
    return this.http.get<Domanda[]>('http://localhost:8080/concorso', {
      params: new HttpParams().set('id', id.toString())
    });
  }

  getConcorsoById(id: number): Observable<Concorso> {
    return this.http.get<Concorso>('http://localhost:8080/concorso/' + id );
  }

  getDomandaById(concorsoId: number, domandaId: number): Observable<Domanda> {
    return this.http.get<Domanda>('http://localhost:8080/concorso/' + concorsoId + '/domanda/' + domandaId);
  }

  cercaDomande(
    idConcorso: number, keywords = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3): Observable<Domanda[]> {

    return this.http.get<Domanda[]>('http://localhost:8080/cerca/', {
      params: new HttpParams()
        .set('idConcorso', idConcorso.toString())
        .set('keywords', keywords)
        .set('sortOrder', sortOrder)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    });
  }

  NotFound() {
    this.router.navigate(['404']);
  }


}
