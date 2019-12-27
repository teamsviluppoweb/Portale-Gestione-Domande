import {NgModule, Optional, SkipSelf} from '@angular/core';
import {SharedModule} from '../../shared/models/shared.module';
import {ConcorsiRoutingModule} from './concorsi-routing.module';
import {ConcorsoComponent, ListaConcorsiComponent} from './components';
import {CommonModule} from '@angular/common';
import {throwIfAlreadyLoaded} from '../../core/guards/module-import.guard';
import {DialogEsitiComponent} from './components/esito-prova/dialog-esiti/dialog-esiti.component';
import {DialogNoteComponent} from './components/esito-prova/dialog-note/dialog-note.component';
import {EsitoProvaComponent} from './components/esito-prova/esito-prova.component';
import {DomandaResolver, EsitoResolver} from '../../core/services';
import {DomandaCandidatoComponent} from './components/domanda-candidato/domanda-candidato.component';



@NgModule({
  declarations: [
  ListaConcorsiComponent,
  ConcorsoComponent,
    EsitoProvaComponent,
    DialogEsitiComponent,
    DialogNoteComponent,
    DomandaCandidatoComponent,
  ],
  imports: [
    SharedModule,
    ConcorsiRoutingModule,
    CommonModule,
  ],
  entryComponents: [
    DialogEsitiComponent,
    DialogNoteComponent,
  ],
  providers: [
    EsitoResolver,
    DomandaResolver,
  ]
})

export class ConcorsiModule {
  constructor(@Optional() @SkipSelf() parentModule: ConcorsiModule) {
    throwIfAlreadyLoaded(parentModule, 'ConcorsiModule');
  }
}
