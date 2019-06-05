import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/models/shared.module';
import {DomandaRoutingModule} from './domanda-routing.module';
import {DomandaEditComponent} from './components/domanda-edit/domanda-edit.component';
import { DomandaComponent } from './components/domanda/domanda.component';
import { StepAnagraficaComponent } from './components/step-anagrafica/step-anagrafica.component';



@NgModule({
  declarations: [
    DomandaEditComponent,
    DomandaComponent,
    StepAnagraficaComponent,
  ],
  imports: [
    SharedModule,
    DomandaRoutingModule
  ]
})

export class DomandaModule {}
