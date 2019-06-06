import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DomandaComponent} from './components/domanda/domanda.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DomandaComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandeRoutingModule { }
