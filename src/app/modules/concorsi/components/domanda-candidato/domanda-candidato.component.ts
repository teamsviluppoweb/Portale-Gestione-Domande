import {Observable, of} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-submission-result',
  templateUrl: './domanda-candidato.component.html',
  styleUrls: ['./domanda-candidato.component.scss'],
})
export class DomandaCandidatoComponent implements OnInit {

  formType = tipoForm;
  sizeType = grandezzaForm;
  $dataSet: Observable<DomandaDinamica[]>;

  constructor(private route: ActivatedRoute) {


    this.route.params.subscribe(
      (x) => {
        this.$dataSet = of(this.route.snapshot.data.domanda);
      }
    );

  }

  ngOnInit(): void {}

}





enum tipoForm {
  input = 0,
  lista = 1,
}

enum grandezzaForm {
  grande = 100,
  medioGrande = 70,
  medio = 30,
  piccolo = 18
}



export interface DomandaDinamica {
  titoloBlocco: string;
  coloreSfondoTitolo: string;
  tipo: number;
  dati?: (DatiEntity)[] | null;
}
export interface DatiEntity {
  etichetta?: string | null;
  valore?: string | null;
  size: number;
}
