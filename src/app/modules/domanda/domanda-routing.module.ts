import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DomandaEditComponent} from './components/domanda-edit/domanda-edit.component';
import {DomandaComponent} from './components/domanda/domanda.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DomandaComponent,
      },
      {
        path: 'edit',
        component: DomandaEditComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomandaRoutingModule { }
