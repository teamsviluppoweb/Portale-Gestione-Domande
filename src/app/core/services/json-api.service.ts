import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Concorsi, Domanda} from '../models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  constructor(private http: HttpClient) {

  }

  getListaConcorsi(): Observable<Concorsi[]> {
    return this.http.get<Concorsi[]>('http://localhost:8080/concorsi');
  }

  getListaDomande(id: number): Observable<Domanda[]> {
    return this.http.get<Domanda[]>('http://localhost:8080/domande/', {
      params: new HttpParams().set('id', id.toString())
    });
  }


}
