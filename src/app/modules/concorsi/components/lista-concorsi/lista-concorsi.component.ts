import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Concorsi} from '../../../../core/models';
import {JsonApiService} from '../../../../core/services/json-api.service';
import {Router} from '@angular/router';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-lista-concorsi',
  templateUrl: './lista-concorsi.component.html',
  styleUrls: ['./lista-concorsi.component.scss']
})
export class ListaConcorsiComponent implements OnInit {
  nomeColonne: string[] = ['id', 'nome', 'open'];

  concorsi: Concorsi[];

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private api: JsonApiService, private router: Router) {}


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.concorsi.length;
    return numSelected === numRows;
  }


  ngOnInit() {
    this.api.getListaConcorsi().subscribe(
      (val) => {
        this.concorsi = val;
      }
    );
  }


  GotoDomande(id) {
    this.router.navigate(['/concorso', id]);
  }
}
