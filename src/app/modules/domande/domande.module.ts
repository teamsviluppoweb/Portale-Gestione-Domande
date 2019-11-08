import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/models/shared.module';
import {DomandeRoutingModule} from './domande-routing.module';
import {CommonModule} from '@angular/common';
import {DomandaResolver} from '../../core/services';
import {MaterialDesignFrameworkModule} from 'angular6-json-schema-form';
import {JsonFormComponent, EsitoProvaComponent} from './components';
import { DialogEsitiComponent } from './components/esito-prova/dialog-esiti/dialog-esiti.component';



@NgModule({
  declarations: [
    JsonFormComponent,
    EsitoProvaComponent,
    DialogEsitiComponent
  ],
  imports: [
    SharedModule,
    DomandeRoutingModule,
    CommonModule,
    MaterialDesignFrameworkModule
  ],
  providers: [
    DomandaResolver,
  ],
  entryComponents: [
    DialogEsitiComponent
  ]
})

export class DomandeModule {}
