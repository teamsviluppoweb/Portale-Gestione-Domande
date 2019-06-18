import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Concorso, Domanda} from '../models';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {catchError} from 'rxjs/operators';


export const searchUrl = 'http://localhost:8080/cerca/';

// To use if we don't want cached application forms response
/*
const httpOptions = {
  headers: new HttpHeaders({
    'x-refresh':  'true'
  })
};
*/

function createHttpOptions( idConcorso: number, keywords = '', sortOrder = 'asc',
                            pageNumber = 0, pageSize = 3, refresh = false) {
  const params = new HttpParams()
    .set('idConcorso', idConcorso.toString())
    .set('keywords', keywords)
    .set('sortOrder', sortOrder)
    .set('pageNumber', pageNumber.toString())
    .set('pageNumber', pageNumber.toString())
    .set('pageSize', pageSize.toString());

  const headerMap = refresh ? {'x-refresh': 'true'} : {};
  const headers = new HttpHeaders(headerMap) ;
  return { headers, params };
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private handleError: HandleError;

  constructor(private http: HttpClient, private router: Router, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ApiService');
  }


  getListaConcorsi(): Observable<any[] | Concorso[]> {
    return this.http.get<Concorso[]>('http://localhost:8080/concorsi').pipe(
      catchError(this.handleError('getListaConcorsi', []))
    );
  }

  getListaDomandeConcorso(id: number): Observable<Domanda[]> {
    return this.http.get<Domanda[]>('http://localhost:8080/concorso', {
      params: new HttpParams().set('id', id.toString())
    });
  }

  getConcorsoById(id: number): Observable<any[] | Concorso> {
    return this.http.get<Concorso>('http://localhost:8080/concorso/' + id ).pipe(
      catchError(this.handleError('getConcorsoById', []))
    );
  }

  getDomandaById(concorsoId: number, domandaId: number): Observable< any[] | Domanda> {
    return this.http.get<Domanda>('http://localhost:8080/concorso/' + concorsoId + '/domanda/' + domandaId).pipe(
      catchError(this.handleError('getDomandaById', []))
    );
  }

  cercaDomande(
    idConcorso: number, keywords = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3, refresh = false): Observable<any[] | Domanda[]> {

    // clear if no pkg name
    if (!keywords.trim()) { return of([]); }

    const options = createHttpOptions(idConcorso, keywords, sortOrder, pageNumber, pageSize, refresh);

    return this.http.get<Domanda[]>(searchUrl, options).pipe(
      catchError(this.handleError('cercaDomande', []))
    );
  }

  NotFound() {
    this.router.navigate(['404']);
  }


}
