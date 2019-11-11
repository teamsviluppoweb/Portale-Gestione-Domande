import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoggingComponent} from '../components/messages/logging.component';
import {CommonModule} from '@angular/common';
import {DialogConfermaComponent} from '../components/dialog-conferma/dialog-conferma.component';


@NgModule({
  declarations: [
    LoggingComponent,
    DialogConfermaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule
  ],
  entryComponents: [
    DialogConfermaComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    LoggingComponent,
    DialogConfermaComponent
  ],

})
export class SharedModule { }
