import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AuthGuard, GuestGuard} from './core/guards';
import {NotFoundComponent} from './layouts/not-found/not-found.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'concorsi',
    pathMatch: 'full',
  },
  {
    path: 'concorsi',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/modules/concorsi/concorsi.module').then(m => m.ConcorsiModule)
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
