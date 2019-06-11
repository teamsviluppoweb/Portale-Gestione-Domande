import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DomandaResolver} from '../../core/services';
import {EsitoProvaComponent, JsonFormComponent} from './components';
export const routes: Routes = [
  {
    path: ':idDomanda',
    component: JsonFormComponent,
    resolve: {
      domanda: DomandaResolver
    },
  },
  {
    path: ':idDomanda/esito',
    component: EsitoProvaComponent,
    resolve: {
      domanda: DomandaResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandeRoutingModule { }
