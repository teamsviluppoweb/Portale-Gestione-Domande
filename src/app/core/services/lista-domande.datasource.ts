import {Domanda} from '../models';
import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {CollectionViewer} from '@angular/cdk/collections';
import {ApplicationFormSearchService} from './application-form-search.service';


export class ListaDomandeDatasource implements DataSource<Domanda> {

  private domandeSubject = new BehaviorSubject<Domanda[]>([]);


// Gestisce il caricamento della tabella
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private apiService: ApplicationFormSearchService) {

  }

  cercaDomande(idConcorso: number,
               keywords: string,
               sortOrder: string,
               pageIndex: number,
               pageSize: number) {

    this.loadingSubject.next(true);

    this.apiService.cercaDomande(idConcorso, keywords, sortOrder,
      pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(lessons => this.domandeSubject.next(lessons));

  }

  connect(collectionViewer: CollectionViewer): Observable<Domanda[]> {
    console.log('Connecting data source');
    return this.domandeSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.domandeSubject.complete();
    this.loadingSubject.complete();
  }

}

