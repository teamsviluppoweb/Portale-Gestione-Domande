import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/models/shared.module';
import {DomandeRoutingModule} from './domande-routing.module';
import { DomandaIlgComponent } from './components/domanda-ilg/domanda-ilg.component';



@NgModule({
  declarations: [
    DomandaIlgComponent,
  ],
  imports: [
    SharedModule,
    DomandeRoutingModule
  ]
})

export class DomandeModule {}
