import {Component, OnInit, ViewChild} from '@angular/core';
import {Concorsi, Domanda} from '../../../../core/models';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../../../core/services';

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

  constructor(private api: ApiService,
              private route: ActivatedRoute,
              private router: Router) {

  }


  ngOnInit() {

    /* Se si resta sulla stessa pagina e si cambiano solo i parametri la pagina non viene ricaricata, dunque ngOnInit non viene triggerato,
    * per ovviare a ciò resto in ascolto dei parametri che cambiano e chiamo la lista delle domande */
    this.route.params.subscribe(
      () => {
        this.concorso = this.route.snapshot.data.concorso;
      }
    );



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
