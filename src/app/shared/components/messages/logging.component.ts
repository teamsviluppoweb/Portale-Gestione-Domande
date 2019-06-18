import { Component } from '@angular/core';
import {MessageService} from '../../../core/services';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']

})
export class LoggingComponent {
  constructor(public messageService: MessageService) {}
}
