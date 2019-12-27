import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConcorsoComponent, ListaConcorsiComponent} from './components';
import {EsitoProvaComponent} from './components/esito-prova/esito-prova.component';
import {DomandaResolver, EsitoResolver} from '../../core/services';
import {DomandaCandidatoComponent, DomandaDinamica} from './components/domanda-candidato/domanda-candidato.component';

export const routes: Routes = [
      {
        path: '',
        component: ListaConcorsiComponent,
      },
      {
        path: 'domande/:nome/:url',
        component: ConcorsoComponent,
      },
      {
        path: 'domande/:nome/:url/domanda/:cf/esito',
        resolve: {
          esiti: EsitoResolver
        },
        component: EsitoProvaComponent,
      },
      {
        path: 'domande/:nome/:url/domanda/:cf',
        resolve: {
          domanda: DomandaResolver
        },
        component: DomandaCandidatoComponent,
      },
      {
        path: 'domande/:nome/:url/domanda/:cf/esito',
        resolve: {
          esiti: EsitoResolver
        },
        component: EsitoProvaComponent,
      },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcorsiRoutingModule { }
