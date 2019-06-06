import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutSwitcherComponent} from './components';
import {DomandaResolver} from '../../core/services';
export const routes: Routes = [
  {
    path: ':idDomanda',
    component: LayoutSwitcherComponent,
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
