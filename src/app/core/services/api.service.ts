import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Concorsi, Domanda} from '../models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getListaConcorsi(): Observable<Concorsi[]> {
    return this.http.get<Concorsi[]>('http://localhost:8080/concorsi');
  }

  getListaDomandeConcorso(id: number): Observable<Domanda[]> {
    return this.http.get<Domanda[]>('http://localhost:8080/concorso', {
      params: new HttpParams().set('id', id.toString())
    });
  }

  getConcorsoById(id: number): Observable<Concorsi> {
    return this.http.get<Concorsi>('http://localhost:8080/concorso/' + id );
  }

  cercaDomande(
    idConcorso: number, keywords = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3): Observable<Domanda[]> {

    return this.http.get<Domanda[]>('http://localhost:8080/cerca/', {
      params: new HttpParams()
        .set('id', idConcorso.toString())
        .set('filter', keywords)
        .set('sortOrder', sortOrder)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    });
  }


}
