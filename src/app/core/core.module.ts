import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AuthGuard, NoAuthGuard} from './guards';
import {throwIfAlreadyLoaded} from './guards/module-import.guard';
import {TokenInterceptor} from './interceptors';




@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    NoAuthGuard,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
