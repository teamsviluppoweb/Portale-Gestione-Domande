import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConcorsoComponent, ListaConcorsiComponent} from './components';
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
        path: ':idConcorso/domanda',
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
