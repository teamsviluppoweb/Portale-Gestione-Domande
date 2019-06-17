import {NgModule, Optional, SkipSelf} from '@angular/core';
import {SharedModule} from '../../shared/models/shared.module';
import {ConcorsiRoutingModule} from './concorsi-routing.module';
import {ConcorsoComponent, ListaConcorsiComponent} from './components';
import {CommonModule} from '@angular/common';
import {throwIfAlreadyLoaded} from '../../core/guards/module-import.guard';



@NgModule({
  declarations: [
  ListaConcorsiComponent,
  ConcorsoComponent],
  imports: [
    SharedModule,
    ConcorsiRoutingModule,
    CommonModule,
  ],
})

export class ConcorsiModule {
  constructor(@Optional() @SkipSelf() parentModule: ConcorsiModule) {
    throwIfAlreadyLoaded(parentModule, 'ConcorsiModule');
  }
}
