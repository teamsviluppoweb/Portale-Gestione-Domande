import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/models/shared.module';
import {DomandeRoutingModule} from './domande-routing.module';
import {CommonModule} from '@angular/common';
import {DomandaResolver} from '../../core/services';
import {MaterialDesignFrameworkModule} from 'angular6-json-schema-form';
import {JsonFormComponent, EsitoProvaComponent} from './components';



@NgModule({
  declarations: [
    JsonFormComponent,
    EsitoProvaComponent,
  ],
  imports: [
    SharedModule,
    DomandeRoutingModule,
    CommonModule,
    MaterialDesignFrameworkModule
  ],
  providers: [
    DomandaResolver
  ]
})

export class DomandeModule {}
