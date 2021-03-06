import {DomandaDinamica} from '../../modules/concorsi/components/domanda-candidato/domanda-candidato.component';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class DomandaResolver implements Resolve<DomandaDinamica> {

  constructor(private service: ApiService) {
  }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {


    return this.service.getDomanda(route.params.url, route.params.cf).pipe(
      tap(x => console.log(x)),
    );

  }

}

