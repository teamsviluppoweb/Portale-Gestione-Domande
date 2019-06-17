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

  anagraficaDatasource = [];
  anagraficaColonne: string[] = ['cognome', 'nome', 'luogoDiNascita', 'dataDiNascita'];

  proveDatsource = [];
  proveColonne: string[] = ['dataProva', 'tipoProva', 'sessioneProva', 'esitoProva', 'punteggioProva', 'allegatiProva',
                            'dataInizioProva', 'durataProva', 'dataFineProva', 'protocolloDataProva', 'notaProva' ];


  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      () => {
        this.esiti = this.route.snapshot.data.domanda;
        // Push, perchè material table vuole che il dato sia un array
        this.anagraficaDatasource.push(this.route.snapshot.data.domanda.Anagrafica);
      }
    );
  }
}
