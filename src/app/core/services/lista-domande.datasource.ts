import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators';
import {CollectionViewer} from '@angular/cdk/collections';
import {ApiService} from './api.service';
import {DomandeEntity, ListaDomande, RisultatiRicercaDomanda} from '../models/interfacesv2/interfacev2';


export class ListaDomandeDatasource implements DataSource<DomandeEntity> {

  private domandeSubject = new BehaviorSubject<DomandeEntity[]>([]);
  public numeroRisultati = 0;

// Gestisce il caricamento della tabella
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private apiService: ApiService) {

  }

  cercaDomande(url: string, pageSize, numeroPagina: number, cf?: string, cognome?: string, nome?: string, id?: string) {

    this.loadingSubject.next(true);
    console.log(cf);

    this.apiService.cercaDomande(url, pageSize, numeroPagina, cf, cognome, nome, id).pipe(
      map((x: RisultatiRicercaDomanda) => {
        this.numeroRisultati = x.numeroDomandateTotaleTrovate;
        return x.domande;
      }),
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(lessons => this.domandeSubject.next(lessons));
  }


  getDomandeArray() {
    return this.domandeSubject;
  }

  connect(collectionViewer: CollectionViewer): Observable<DomandeEntity[]> {
    console.log('Connecting data source');
    return this.domandeSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.domandeSubject.complete();
    this.loadingSubject.complete();
  }

}

