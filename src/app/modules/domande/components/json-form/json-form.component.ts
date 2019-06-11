import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Domanda} from '../../../../core/models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jsonForm',
  template: `
    <json-schema-form
      loadExternalAssets="true"
      framework="material-design"
      [(ngModel)]="domanda">
    </json-schema-form>
  `
})
export class JsonFormComponent implements OnInit {

  exampleJsonObject = {
    first_name: 'Jane', last_name: 'Doe', age: 25, is_company: false,
    address: {
      street_1: '123 Main St.', street_2: null,
      city: 'Las Vegas', state: 'NV', zip_code: '89123'
    },
    phone_numbers: [
      { number: '702-123-4567', type: 'cell' },
      { number: '702-987-6543', type: 'work' }
    ], notes: ''
  };

  domanda: Domanda;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      () => {
        this.domanda = this.route.snapshot.data.domanda.Anagrafica;
      }
    );
  }
  ngOnInit() {
  }



}


