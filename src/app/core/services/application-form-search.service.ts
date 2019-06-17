import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {Domanda} from '../models';
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

@Injectable()
export class ApplicationFormSearchService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
) {
    this.handleError = httpErrorHandler.createHandleError('ApplicationFormSearchService');
  }

  cercaDomande(
    idConcorso: number, keywords = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3, refresh = false): Observable<Domanda[]> {

    // clear if no pkg name
    if (!keywords.trim()) { return of([]); }

    const options = createHttpOptions(idConcorso, keywords, sortOrder, pageNumber, pageSize, refresh);

    return this.http.get<Domanda[]>(searchUrl, options).pipe(
      catchError(this.handleError('search', []))
    );
  }

}
