import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portale-Gestione-Domande';

  allowDebugInfo: boolean;

  constructor() {
    this.allowDebugInfo = false;
  }

  changeDebugInfo(){
    this.allowDebugInfo = !this.allowDebugInfo;
  }


}
