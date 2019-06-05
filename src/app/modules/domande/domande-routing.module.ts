import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaDomandeComponent} from './components/lista-domande/lista-domande.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListaDomandeComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandeRoutingModule { }
