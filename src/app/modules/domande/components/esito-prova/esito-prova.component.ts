import {Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {PageTitleService} from '../../../../core/services/page-title.service';
import {MatDialog} from '@angular/material';
import {DialogEsitiComponent} from './dialog-esiti/dialog-esiti.component';

@Component({
  selector: 'app-esito-prova',
  templateUrl: './esito-prova.component.html',
  styleUrls: ['./esito-prova.component.scss']
})
export class EsitoProvaComponent implements OnInit {

  anagraficaDatasource = [];
  anagraficaColonne: string[] = ['cognome', 'nome', 'luogoDiNascita', 'dataDiNascita'];

  proveDatsource = [];
  proveColonne: string[] = ['dataProva', 'tipoProva', 'sessioneProva', 'esitoProva', 'punteggioProva', 'allegatiProva',
                            'dataInizioProva', 'durataProva', 'dataFineProva', 'protocolloDataProva', 'notaProva', 'delete' ];


  constructor(private route: ActivatedRoute,
              private pageTitleService: PageTitleService,
              public dialog: MatDialog) {
    this.route.params.subscribe(
      () => {
        // Push, perchè material table vuole che il dato sia un array
        this.anagraficaDatasource.push(this.route.snapshot.data.domanda.Anagrafica);
        this.proveDatsource = this.route.snapshot.data.domanda.prove;
      }
    );
  }

  ngOnInit(): void {
    this.pageTitleService.set('ESITI');
  }


  apriDialog(): void {
    const dialogRef = this.dialog.open(DialogEsitiComponent, {
      height: 'auto',
      width: '1300px',
      data: 'robert',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
