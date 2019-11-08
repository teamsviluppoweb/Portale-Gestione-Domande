import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Concorso} from '../../../../core/models';
import {MatPaginator, MatSort} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {ListaDomandeDatasource, ApiService} from '../../../../core/services';
import {fromEvent, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-lista-domande',
  templateUrl: './concorso.component.html',
  styleUrls: ['./concorso.component.scss'],
})
export class ConcorsoComponent implements OnInit, AfterViewInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('input', { static: true }) input: ElementRef;

  selection = new SelectionModel<any>(true, []);

  nomeColonne: string[] = [ 'checkbox', 'id', 'nominativo', 'dataNascita', 'dataProva', 'nomeProva', 'open'];

  dataSource: ListaDomandeDatasource;
  concorso: Concorso; // Risultato del resolver esistenza concorso




  constructor(private api: ApiService,
              private router: Router,
              private route: ActivatedRoute) {

  }


  ngOnInit() {

    /* Se si resta sulla stessa pagina e si cambiano solo i parametri la pagina non viene ricaricata, dunque ngOnInit non viene triggerato,
    * per ovviare a ciò resto in ascolto dei parametri che cambiano e chiamo la lista delle domande */
    this.route.params.subscribe(
      () => {
        this.concorso = this.route.snapshot.data.concorso;
        console.log('concorso', this.concorso);
      }
    );

    // Istanzio il datasource passandogli il service
    this.dataSource = new ListaDomandeDatasource(this.api);
    this.dataSource.cercaDomande(this.concorso.id, '', 'asc', 0, 3);


  }

  ngAfterViewInit() {



    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // Triggero evento input nella searchbar
    fromEvent(this.input.nativeElement, 'keyup')
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
    console.log('pagesize', this.paginator.pageSize);
    this.dataSource.cercaDomande(
      this.concorso.id,
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

  GotoDomanda(id) {
    return 'domanda/' + id + '/esito';
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.getDomandeArray().value.length;
    return numSelected === numRows;

  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
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
