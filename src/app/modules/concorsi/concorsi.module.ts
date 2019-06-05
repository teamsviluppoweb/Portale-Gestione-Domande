import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/models/shared.module';
import {ConcorsiRoutingModule} from './concorsi-routing.module';
import { ListaConcorsiComponent } from './components/lista-concorsi/lista-concorsi.component';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from '../../core/interceptors';



@NgModule({
  declarations: [
  ListaConcorsiComponent],
  imports: [
    SharedModule,
    ConcorsiRoutingModule,
    CommonModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ]
})

export class ConcorsiModule {}