import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {PageTitleService} from '../../../../core/services/page-title.service';
import {MatDialog} from '@angular/material';
import {DialogEsitiComponent} from './dialog-esiti/dialog-esiti.component';
import {DialogNoteComponent} from './dialog-note/dialog-note.component';
import {ProveEntity} from '../../../../core/models';
import {DialogConfermaComponent} from '../../../../shared/components/dialog-conferma/dialog-conferma.component';
import {ApiService} from '../../../../core/services';

// tslint:disable-next-line:class-name
export interface provaDT {
  allegati: string;
  dataProva: string;
  esito: string;
  nomeProva: string;
  punteggio: string;
  sessione: string;
  dataInizio: string,
  durata: string,
  dataFine: string,
  nuovaData: string,
  protocolli: [{
      id: string,
      nota: string,
      data: string,
    }
    ];
}

@Component({
  selector: 'app-esito-prova',
  templateUrl: './esito-prova.component.html',
  styleUrls: ['./esito-prova.component.scss']
})
export class EsitoProvaComponent implements OnInit, OnDestroy{

  anagraficaDatasource = [];
  anagraficaColonne: string[] = ['cognome', 'nome', 'luogoDiNascita', 'dataDiNascita'];

  proveDatsource: ProveEntity[] = [];
  proveColonne: string[] = ['dataProva', 'tipoProva', 'sessioneProva', 'esitoProva', 'punteggioProva', 'allegatiProva',
                            'dataInizioProva', 'durataProva', 'dataFineProva', 'protocolloDataProva', 'notaProva', 'delete' ];

  ids;

  constructor(private route: ActivatedRoute,
              private pageTitleService: PageTitleService,
              private apiservice: ApiService,
              public dialog: MatDialog) {
    this.route.params.subscribe(
      (x) => {
        this.ids = x;
        // Push, perchè material table vuole che il dato sia un array
        this.anagraficaDatasource.push(this.route.snapshot.data.domanda.Anagrafica);
        this.proveDatsource = this.route.snapshot.data.domanda.prove;
      }
    );
  }

  ngOnInit(): void {
    this.pageTitleService.set('ESITI');
    this.apiservice.sendStato(this.ids);
  }

  ngOnDestroy(): void {
    this.apiservice.clearStato();
  }

  apriDialog(): void {

    let obj = {
      allegati: '',
      dataProva: '',
      esito: '',
      nomeProva: '',
      punteggio: '',
      sessione: 1,
      dataInizio: '',
      durata: '',
      dataFine: '',
      nuovaData: '',
      protocolli: {
          id: '',
          nota: '',
          data: ''
        }
    };

    const dialogRef = this.dialog.open(DialogEsitiComponent, {
      height: 'auto',
      width: 'auto',
      data: obj,
    });

    dialogRef.afterClosed().subscribe(x => {
      if(x) {
        this.proveDatsource.push(x);
        this.proveDatsource = this.proveDatsource.slice();
      }
    });
  }

  editDialog(index): void {

    const obj = this.proveDatsource[index];

    const dialogRef = this.dialog.open(DialogEsitiComponent, {
      height: 'auto',
      width: 'auto',
      data: obj,
    });

    dialogRef.afterClosed().subscribe(x => {
      if(x) {
        this.proveDatsource[index] = x;
        this.proveDatsource = this.proveDatsource.slice();
      }
    });
  }

  removeProva(index){
    this.proveDatsource.splice(index, 1);
    this.proveDatsource = this.proveDatsource.slice();
  }


  editProva(index){
    this.editDialog(index);
  }

  apriDialogNota(index) {
    const data = this.proveDatsource[index];
    console.log(data);
    const dialogNota = this.dialog.open(DialogNoteComponent, {
      height: 'auto',
      width: 'auto',
      data: data.protocolli.nota,
    });
  }

  apriDialogConferma(index){
    const dialgoConferma = this.dialog.open(DialogConfermaComponent, {
      height: 'auto',
      width: 'auto',
      data: false,
    });

    dialgoConferma.afterClosed().subscribe(x => {
      console.log(x);
      if(x) {
        this.removeProva(index);
      }
    });
  }
}
