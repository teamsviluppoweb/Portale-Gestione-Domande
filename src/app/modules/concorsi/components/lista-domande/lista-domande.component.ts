import {Component, OnInit, ViewChild} from '@angular/core';
import {Concorsi, Domanda} from '../../../../core/models';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {JsonApiService} from '../../../../core/services/json-api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lista-domande',
  templateUrl: './lista-domande.component.html',
  styleUrls: ['./lista-domande.component.scss']
})
export class ListaDomandeComponent implements OnInit {
  nomeColonne: string[] = ['id', 'nominativo', 'dataNascita', 'dataProva', 'nomeProva', 'open'];

  domande: Domanda[];
  concorso: Concorsi;

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private api: JsonApiService,
              private route: ActivatedRoute,
              private router: Router) {}


  ngOnInit() {

    this.concorso = this.route.snapshot.data.concorso;

    console.log('Ho risolto il concorso');

    console.log(this.concorso);

    /*
      this.api.getListaDomandeConcorso(1).subscribe(
        (val) => {
          console.log(val);
          this.domande = val;
        }
      );
     */
  }


  GotoDomande(id) {
    this.router.navigate(['/concorso', id]);
  }
}
