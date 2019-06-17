import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-esito-prova',
  templateUrl: './esito-prova.component.html',
  styleUrls: ['./esito-prova.component.scss']
})
export class EsitoProvaComponent {

  anagraficaDatasource = [];
  anagraficaColonne: string[] = ['cognome', 'nome', 'luogoDiNascita', 'dataDiNascita'];

  proveDatsource = [];
  proveColonne: string[] = ['dataProva', 'tipoProva', 'sessioneProva', 'esitoProva', 'punteggioProva', 'allegatiProva',
                            'dataInizioProva', 'durataProva', 'dataFineProva', 'protocolloDataProva', 'notaProva' ];


  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      () => {
        // Push, perchè material table vuole che il dato sia un array
        this.anagraficaDatasource.push(this.route.snapshot.data.domanda.Anagrafica);

        this.proveDatsource = this.route.snapshot.data.domanda.prove;

      }
    );
  }
}
