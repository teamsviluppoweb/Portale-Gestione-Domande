import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/models/shared.module';
import {ConcorsiRoutingModule} from './concorsi-routing.module';
import {ConcorsoComponent, ListaConcorsiComponent} from './components';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from '../../core/interceptors';
import {ConcorsoResolver} from '../../core/services';



@NgModule({
  declarations: [
  ListaConcorsiComponent,
  ConcorsoComponent],
  imports: [
    SharedModule,
    ConcorsiRoutingModule,
    CommonModule,
  ],
  providers: [
    ConcorsoResolver,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ]
})

export class ConcorsiModule {}
