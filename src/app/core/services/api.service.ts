import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Concorso, Domanda} from '../models';
import {Observable, of, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {catchError, map, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {DomandeEntity, Esiti, ListaConcorsi, ListaDomande, RisultatiRicercaDomanda} from '../models/interfacesv2/interfacev2';
import {DomandaDinamica} from '../../modules/concorsi/components/domanda-candidato/domanda-candidato.component';


export const searchUrl = 'http://localhost:8080/cerca/';

// To use if we don't want cached application forms response
/*
const httpOptions = {
  headers: new HttpHeaders({
    'x-refresh':  'true'
  })
};
*/

function createHttpOptions( pageSize, numeroPagina, cf = '', cognome = '', nome = '', id = '') {
  let params = new HttpParams()
    .set('pageSize', pageSize.toString())
    .set('numeroPagina', numeroPagina.toString());

  if (cf !== '') {
    console.log(cf);
    params = params.append( 'codiceFiscale', cf.toString());
  }

  if (cognome !== '') {
    console.log(cf);
    params = params.append( 'cognome', cognome.toString());
  }

  if (nome !== '') {
    console.log(cf);
    params = params.append( 'nome', nome.toString());
  }

  if (id !== '') {
    console.log(cf);
    params = params.append( 'idDomanda', id.toString());
  }


  return { params };
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private handleError: HandleError;

  private menuDomanda = new Subject<any>();


  constructor(private http: HttpClient, private router: Router, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ApiService');
  }


  sendStato(data: boolean) {
    this.menuDomanda.next(data);
  }

  clearStato() {
    this.menuDomanda.next();
  }

  getMessage(): Observable<any> {
    return this.menuDomanda.asObservable();
  }

  getListaConcorsi(): Observable<ListaConcorsi[]> {
    return this.http.get<ListaConcorsi[]>(environment.endpoint.listaConcorsi).pipe(
      tap((x) => console.log(x))
    );
  }

  getListaDomandeConcorso(id: number): Observable<Domanda[]> {
    return this.http.get<Domanda[]>('http://localhost:8080/concorso', {
      params: new HttpParams().set('id', id.toString())
    });
  }

  getConcorsoById(url: string): Observable<ListaDomande> {
    return this.http.get<ListaDomande>(url + '/getDomande' ).pipe(
      tap(x => console.log(x))
    );
  }

  getDomanda(url: string, cf: string): Observable<DomandaDinamica> {
    return this.http.get<DomandaDinamica>(url + '/' + 'VisualizzaDomanda/' + cf).pipe(
      tap(x => console.log(x))
    );
  }

  getEsiti(url: string, cf: string): Observable<Esiti> {
    return this.http.get<Esiti>(url + '/' + 'VisualizzaEsiti/' + cf).pipe(
      tap(x => console.log(x))
    );
  }

  cercaDomande(
    url: string, pageSize = 1, numeroPagina = 1, cf, cognome, nome, id): Observable<any[] | RisultatiRicercaDomanda> {

    console.log(cf);

    // Ritorna un array vuoto se non c'è nessuna keywords
    // if (!keywords.trim()) { return of([]); }

    const options = createHttpOptions(pageSize, numeroPagina, cf, cognome, nome, id);

    return this.http.get<RisultatiRicercaDomanda>(url + '/getDomande', options).pipe(
      tap(x => console.log(x)),
    );
  }

  NotFound() {
    this.router.navigate(['404']);
  }


}
