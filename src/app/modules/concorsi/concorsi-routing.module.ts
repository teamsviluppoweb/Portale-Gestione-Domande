import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaConcorsiComponent} from './components/lista-concorsi/lista-concorsi.component';
import {ListaDomandeComponent} from './components/lista-domande/lista-domande.component';
import {ConcorsoResolver} from './concorso.resolver';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListaConcorsiComponent,
      },
      {
        path: ':id',
        component: ListaDomandeComponent,
        resolve: {
          concorso: ConcorsoResolver
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcorsiRoutingModule { }
