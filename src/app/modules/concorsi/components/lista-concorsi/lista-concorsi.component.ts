import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Concorso} from '../../../../core/models';
import {ApiService} from '../../../../core/services';
import {Router} from '@angular/router';
import {PageTitleService} from '../../../../core/services/page-title.service';
import {ListaConcorsi} from '../../../../core/models/interfacesv2/interfacev2';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-lista-concorsi',
  templateUrl: './lista-concorsi.component.html',
  styleUrls: ['./lista-concorsi.component.scss']
})
export class ListaConcorsiComponent implements OnInit {
  nomeColonne: string[] = ['nome', 'open'];

  listaConcorsi: ListaConcorsi[] = [];

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private api: ApiService, private router: Router,
              private pageTitleService: PageTitleService) {}


  ngOnInit() {

    this.pageTitleService.set('LISTA CONCORSI');

    this.api.getListaConcorsi().subscribe(
      (val: ListaConcorsi[]) => {
        this.listaConcorsi = [];
        this.listaConcorsi = val;
      }
    );
  }


  GotoDomande(id: ListaConcorsi) {
    console.log(id);
    this.router.navigate(['/concorsi/domande', encodeURI(id.nomeConcorso), encodeURI(id.urlConcorso)]);
  }
}
