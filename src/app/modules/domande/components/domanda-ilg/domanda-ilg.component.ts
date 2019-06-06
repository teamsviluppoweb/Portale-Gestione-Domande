import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-domanda-ilg',
  templateUrl: './domanda-ilg.component.html',
  styleUrls: ['./domanda-ilg.component.scss']
})
export class DomandaIlgComponent implements OnInit {

  obj: object;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (route) => {
        this.obj = route;
      }
    );
  }

}
