import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaConcorsiComponent} from './components/lista-concorsi/lista-concorsi.component';
import {ConcorsoComponent} from './components/concorso/concorso.component';
import {ConcorsoResolver} from '../../core/services';
import {DOMANDE_ROUTES} from '../../shared/routes/content-layout.routes';

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
        children: DOMANDE_ROUTES,
        resolve: {
          concorso: ConcorsoResolver
        }
      },
      {
        path: ':id/domanda',
        children: DOMANDE_ROUTES,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcorsiRoutingModule { }
