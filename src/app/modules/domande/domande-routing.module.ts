import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DomandaIlgComponent} from './components/domanda-ilg/domanda-ilg.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DomandaIlgComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandeRoutingModule { }
