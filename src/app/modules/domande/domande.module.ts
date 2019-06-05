import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/models/shared.module';
import {DomandeRoutingModule} from './domande-routing.module';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from '../../core/interceptors';
import { ListaDomandeComponent } from './components/lista-domande/lista-domande.component';



@NgModule({
  declarations: [
  ListaDomandeComponent
  ],
  imports: [
    SharedModule,
    DomandeRoutingModule,
    CommonModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ]
})

export class DomandeModule {}
