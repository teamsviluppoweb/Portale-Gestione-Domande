import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Domanda} from '../../../../core/models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jsonForm',
  // tslint:disable-next-line:max-line-length
  template: `<mat-card><json-schema-form loadExternalAssets="true" framework="material-design" [(ngModel)]="domanda"></json-schema-form></mat-card>`
})
export class JsonFormComponent {

  domanda: Domanda;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      () => {
        this.domanda = this.route.snapshot.data.domanda.Anagrafica;
      }
    );
  }
}


