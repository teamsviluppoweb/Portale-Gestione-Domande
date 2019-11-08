import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import {CONTENT_ROUTES} from './shared/routes/content-layout.routes';

import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AuthGuard, GuestGuard} from './core/guards';
import {NotFoundComponent} from './layouts/not-found/not-found.component';



const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    children: CONTENT_ROUTES
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
