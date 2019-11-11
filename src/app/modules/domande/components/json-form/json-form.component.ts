import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Domanda} from '../../../../core/models';
import {ApiService} from '../../../../core/services';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jsonForm',
  // tslint:disable-next-line:max-line-length
  template: `<mat-card><json-schema-form loadExternalAssets="true" framework="material-design" [(ngModel)]="domanda"></json-schema-form></mat-card>`
})
export class JsonFormComponent implements AfterViewInit, OnDestroy{

  domanda: Domanda;
  dts;

  constructor(private route: ActivatedRoute, private apiservice: ApiService) {
    this.route.params.subscribe(
      (x) => {
        this.dts = x;
        this.domanda = this.route.snapshot.data.domanda.Anagrafica;
      }
    );
  }

  ngAfterViewInit(): void {
    this.apiservice.sendStato(this.dts);
  }

  ngOnDestroy(): void {
    this.apiservice.clearStato();
  }
}


