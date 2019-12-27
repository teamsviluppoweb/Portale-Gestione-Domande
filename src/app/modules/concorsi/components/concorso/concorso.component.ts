import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {ListaDomandeDatasource, ApiService} from '../../../../core/services';
import {fromEvent, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {SelectionModel} from '@angular/cdk/collections';
import {PageTitleService} from '../../../../core/services/page-title.service';
import {ListaDomande} from '../../../../core/models/interfacesv2/interfacev2';

export interface ConcorsoFromRoute {
  nome: string;
  url: string;
}

@Component({
  selector: 'app-lista-domande',
  templateUrl: './concorso.component.html',
  styleUrls: ['./concorso.component.scss'],
})
export class ConcorsoComponent implements OnInit, AfterViewInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild('cfSearchbar', { static: true }) cfSearchbar: ElementRef;
  @ViewChild('cognomeSearchbar', { static: true }) cognomeSearchbar: ElementRef;
  @ViewChild('nomeSearchbar', { static: true }) nomeSearchbar: ElementRef;
  @ViewChild('idSearchBar', { static: true }) idSearchBar: ElementRef;

  selection = new SelectionModel<any>(true, []);

  nomeColonne: string[] = [ 'checkbox', 'id', 'nominativo', 'dataNascita', 'dataProva', 'nomeProva', 'open'];

  dataSource: ListaDomandeDatasource;
  concorso: ConcorsoFromRoute;





  constructor(private api: ApiService,
              private router: Router,
              private pageTitle: PageTitleService,
              private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.paginator.pageIndex = 0;

    this.dataSource = new ListaDomandeDatasource(this.api);

    this.pageTitle.set('LISTA DOMANDE CONCORSO');

    /* Se si resta sulla stessa pagina e si cambiano solo i parametri la pagina non viene ricaricata, dunque ngOnInit non viene triggerato,
    * per ovviare a ciò resto in ascolto dei parametri che cambiano e chiamo la lista delle domande */
    this.route.params.subscribe(
      (x) => {

        this.concorso = {
          nome: x.nome,
          url: x.url
        };

        console.log(this.concorso);
      }
    );

    this.paginator.pageSize = 10;

    // Istanzio il datasource passandogli il service
    this.dataSource.cercaDomande(this.concorso.url, this.paginator.pageSize,  1);


  }

  ngAfterViewInit() {




    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // Triggero evento input nella searchbar
    fromEvent(this.cfSearchbar.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.CaricaPaginaDomande();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.CaricaPaginaDomande())
      )
      .subscribe();



    fromEvent(this.cognomeSearchbar.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.CaricaPaginaDomande();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.CaricaPaginaDomande())
      )
      .subscribe();


    fromEvent(this.nomeSearchbar.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.CaricaPaginaDomande();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.CaricaPaginaDomande())
      )
      .subscribe();

    fromEvent(this.idSearchBar.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.CaricaPaginaDomande();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.CaricaPaginaDomande())
      )
      .subscribe();

  }



  CaricaPaginaDomande() {
    this.dataSource.cercaDomande(
      this.concorso.url,
      this.paginator.pageSize,
      this.paginator.pageIndex + 1,
      this.cfSearchbar.nativeElement.value,
      this.cognomeSearchbar.nativeElement.value,
      this.nomeSearchbar.nativeElement.value,
      this.idSearchBar.nativeElement.value,

    );
  }



  GotoDomanda(domanda: ListaDomande) {
    return 'domanda/' + domanda.codiceFiscale + '/esito';
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.getDomandeArray().value.length;
    return numSelected === numRows;

  }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
     this.isAllSelected() ?
       this.selection.clear() :
       this.dataSource.getDomandeArray().value.forEach(row => this.selection.select(row));
     console.log(this.dataSource.getDomandeArray().value);
   }


  startToggle() {
    if (this.selection.hasValue()) {
      return true;
    }
    console.log(this.selection.hasValue());
    return false;
  }

}
