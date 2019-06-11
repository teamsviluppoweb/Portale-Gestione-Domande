import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-domanda-switcher',
  template: `
    <json-schema-form
      loadExternalAssets="true"
      [(ngModel)]="exampleJsonObject">
    </json-schema-form>
  `
})
export class LayoutSwitcherComponent implements OnInit {

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

  data: object;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      (data) => {
        this.data = data.idConcorso;
      }
    );
  }
  ngOnInit() {
  }



}


