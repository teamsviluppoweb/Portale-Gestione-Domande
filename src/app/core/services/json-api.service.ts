import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Concorsi} from '../models';
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

}
