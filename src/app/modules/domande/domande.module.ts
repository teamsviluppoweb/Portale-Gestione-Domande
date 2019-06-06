import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/models/shared.module';
import {DomandeRoutingModule} from './domande-routing.module';
import { DomandaIlgComponent, DomandaIaComponent, LayoutSwitcherComponent } from './components';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    DomandaIlgComponent,
    DomandaIaComponent,
    LayoutSwitcherComponent,
  ],
  imports: [
    SharedModule,
    DomandeRoutingModule,
    CommonModule
  ]
})

export class DomandeModule {}
