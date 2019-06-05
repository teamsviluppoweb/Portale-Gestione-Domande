import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaConcorsiComponent} from './components/lista-concorsi/lista-concorsi.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListaConcorsiComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcorsiRoutingModule { }
