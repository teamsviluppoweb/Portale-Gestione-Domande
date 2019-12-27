import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {ApiService} from './api.service';
import {catchError, tap} from 'rxjs/operators';
import {Esiti} from '../models/interfacesv2/interfacev2';


@Injectable()
export class EsitoResolver implements Resolve<Esiti> {

  constructor(private service: ApiService) {
  }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {


    return this.service.getEsiti(route.params.url, route.params.cf).pipe(
      tap(x => console.log(x)),
    )
    ;

  }

}

