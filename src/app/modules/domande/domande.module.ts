import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/models/shared.module';
import {DomandeRoutingModule} from './domande-routing.module';
import { DomandaIlgComponent, DomandaIaComponent, LayoutSwitcherComponent } from './components';
import {CommonModule} from '@angular/common';
import {DomandaResolver} from '../../core/services';
import {MaterialDesignFrameworkModule} from 'angular6-json-schema-form';



@NgModule({
  declarations: [
    DomandaIlgComponent,
    DomandaIaComponent,
    LayoutSwitcherComponent,
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
