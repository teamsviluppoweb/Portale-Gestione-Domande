import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProveEntity} from '../../../../core/models';

@Component({
  selector: 'app-esito-prova',
  templateUrl: './esito-prova.component.html',
  styleUrls: ['./esito-prova.component.scss']
})
export class EsitoProvaComponent {

  esiti: ProveEntity;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      () => {
        this.esiti = this.route.snapshot.data.domanda.prove;
        console.log(this.esiti);
      }
    );
  }
}
