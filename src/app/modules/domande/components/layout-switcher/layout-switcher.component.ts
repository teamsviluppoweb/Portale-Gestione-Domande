import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-domanda-switcher',
  template: `
    <ng-container [ngSwitch]="data">
      <app-domanda-ilg *ngSwitchCase="1"></app-domanda-ilg>
      <app-domanda-ia *ngSwitchCase="2"></app-domanda-ia>
    </ng-container>    `
})
export class LayoutSwitcherComponent implements OnInit {

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


