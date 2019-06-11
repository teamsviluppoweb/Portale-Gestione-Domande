import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DomandaResolver} from '../../core/services';
import {JsonFormComponent} from './components';
export const routes: Routes = [
  {
    path: ':idDomanda',
    component: JsonFormComponent,
    resolve: {
      domanda: DomandaResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandeRoutingModule { }
