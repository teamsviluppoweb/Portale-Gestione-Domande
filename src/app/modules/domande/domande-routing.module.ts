import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutSwitcherComponent} from './components';
export const routes: Routes = [
  {
    path: ':idDomanda',
    component: LayoutSwitcherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandeRoutingModule { }
