import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaConcorsiComponent} from './components/lista-concorsi/lista-concorsi.component';
import {ConcorsoComponent} from './components/concorso/concorso.component';
import {ConcorsoResolver} from '../../core/services';

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
        component: ConcorsoComponent,
        resolve: {
          concorso: ConcorsoResolver
        },
        children: [
          {
            path: 'domande/:id',
            component: ListaConcorsiComponent,
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcorsiRoutingModule { }
