import {Component, OnInit, ViewChild} from '@angular/core';
import {Domanda} from '../../../../core/models';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {JsonApiService} from '../../../../core/services/json-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-domande',
  templateUrl: './lista-domande.component.html',
  styleUrls: ['./lista-domande.component.scss']
})
export class ListaDomandeComponent implements OnInit {
  nomeColonne: string[] = ['id', 'nominativo', 'dataNascita', 'dataProva', 'nomeProva', 'open'];

  domande: Domanda[];

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private api: JsonApiService, private router: Router) {}


  ngOnInit() {
    this.api.getListaDomande(1).subscribe(
      (val) => {
        console.log(val);
        this.domande = val;
      }
    );
  }


  GotoDomande(id) {
    this.router.navigate(['/concorso', id]);
  }
}
