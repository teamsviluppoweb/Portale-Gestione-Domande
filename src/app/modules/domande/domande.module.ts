import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/models/shared.module';
import {DomandeRoutingModule} from './domande-routing.module';
import { DomandaComponent } from './components/domanda/domanda.component';



@NgModule({
  declarations: [
    DomandaComponent,
  ],
  imports: [
    SharedModule,
    DomandeRoutingModule
  ]
})

export class DomandeModule {}
