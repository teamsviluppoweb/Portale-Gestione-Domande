import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {provaDT} from '../esito-prova.component';
import * as moment from 'moment';

// tslint:disable-next-line:class-name
interface esito {
  id: number;
  descrizione: string;
}

// tslint:disable-next-line:class-name
interface tipoProva {
  id: number;
  descrizione: string;
}

const esiti: esito[] = [
  {id: 0, descrizione: 'SUPERATA'},
  {id: 1, descrizione: 'ASSENTE GIUSTIFICATO'},
  {id: 2, descrizione: 'AMMESSO'}
];


const tipoProve: tipoProva[] = [
  {id: 0, descrizione: 'PROVA SELETTIVA'},
  {id: 1, descrizione: 'PROVA NUOTO'},
  {id: 2, descrizione: 'COLLOQUIO'}
];

@Component({
  selector: 'app-dialog-esiti',
  templateUrl: './dialog-esiti.component.html',
  styleUrls: ['./dialog-esiti.component.scss']
})
export class DialogEsitiComponent implements OnInit {

  form: FormGroup;
  listEsiti: esito[] = esiti;
  listProve: tipoProva[] = tipoProve;
  ass: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogEsitiComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: provaDT) {
    this.createForm();
    this.patchForm();
  }

  private createForm() {
    this.form = this.fb.group({
      dataProva: ['', Validators.required],
      punteggio: ['', Validators.required],
      esitoProva: ['', Validators.required],
      tipoProva: ['', Validators.required],
      dataInizio: ['', Validators.required],
      durata: ['', Validators.required],
      dataFine: [],
      note: ['', Validators.required],
      numProtocollo: ['', Validators.required],
      nuovaData: ['', Validators.required],
      idProtocollo: ['', Validators.required],
      dataProtocollo: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.onChangesForm();
  }

  private onChangesForm() {
    this.esitoProva().valueChanges.subscribe( (x: esito) => {
      this.dataDialog.esito = x.descrizione;

      if (x.descrizione !== 'ASSENTE GIUSTIFICATO') {
        this.dataInizio().reset();
        this.durata().reset();
        this.dataFine().reset();
        this.note().reset();
        this.nuovaData().reset();
        this.numProtocollo().reset();
        this.dataProtocollo().reset();
        this.form.updateValueAndValidity();
      }
    });

    this.dataProva().valueChanges.subscribe((x) => {
      this.dataDialog.dataProva = x;
    });

    this.tipoProva().valueChanges.subscribe( (x: tipoProva) => {
      this.dataDialog.nomeProva = x.descrizione;
    });

    this.punteggio().valueChanges.subscribe((x) => {
      this.dataDialog.punteggio = x;
    });

    this.dataInizio().valueChanges.subscribe((x) => {
      this.dataDialog.dataInizio = x;
      if(this.dataInizio().value && this.durata().value) {
        let data = this.dataInizio().value;
        data = moment(data).add(x, 'days').clone().toDate();
        this.dataFine().patchValue(data);
      }
    });

    this.durata().valueChanges.subscribe((x) => {
      this.dataDialog.durata = x;

      if(this.dataInizio().value && this.durata().value) {
        let data = this.dataInizio().value;
        data = moment(data).add(x, 'days').clone().toDate();
        this.dataFine().patchValue(data);
      }

    });

    this.note().valueChanges.subscribe((x) => {
      this.dataDialog.protocolli['nota'] = x;
    });

    this.idProtocollo().valueChanges.subscribe((x) => {
      this.dataDialog.protocolli['id'] = x;
    });

    this.dataProtocollo().valueChanges.subscribe((x) => {
      this.dataDialog.protocolli['data'] = x;
    });

    this.nuovaData().valueChanges.subscribe((x) => {
      this.dataDialog.nuovaData = x;
    })

  }

  isAssente() {
    if (this.esitoProva().value.descrizione === 'ASSENTE GIUSTIFICATO') {
      return true;
    } else {
      return false;
    }
  }


  private patchForm() {
    console.log(this.dataDialog.protocolli);
    if(this.dataDialog.nomeProva) {
      this.dataProva().patchValue(this.dataDialog.dataProva);
      this.punteggio().patchValue(this.dataDialog.punteggio);
      this.esitoProva().patchValue(this.listEsiti.filter(x => x.descrizione === this.dataDialog.esito).map(x => x).reduce(x => x));
      this.tipoProva().patchValue(this.listProve.filter(x => x.descrizione === this.dataDialog.nomeProva).map(x => x).reduce(x => x));
      this.durata().patchValue(this.dataDialog.durata);
      this.dataFine().patchValue(this.dataDialog.dataFine);
      this.dataInizio().patchValue(this.dataDialog.dataInizio);
      this.note().patchValue(this.dataDialog.protocolli['nota']);
      this.idProtocollo().patchValue(this.dataDialog.protocolli['id']);
      this.dataProtocollo().patchValue(this.dataDialog.protocolli['data']);

    }
  }

  dataProva() {
    return this.form.get('dataProva');
  }

  punteggio() {
    return this.form.get('punteggio');
  }

  esitoProva() {
    return this.form.get('esitoProva');
  }

  tipoProva() {
    return this.form.get('tipoProva');
  }

  dataInizio() {
    return this.form.get('dataInizio');
  }

  durata() {
    return this.form.get('durata');
  }

  dataFine() {
    return this.form.get('dataFine');
  }

  note() {
    return this.form.get('note');
  }

  numProtocollo() {
    return this.form.get('numProtocollo');
  }

  nuovaData() {
    return this.form.get('nuovaData');
  }

  idProtocollo() {
    return this.form.get('idProtocollo');
  }

  dataProtocollo() {
    return this.form.get('dataProtocollo');
  }


}
