import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {JsonApiService} from '../../core/services/json-api.service';
import {Concorsi} from '../../core/models';


@Injectable()
export class ConcorsoResolver implements Resolve<Concorsi> {

  constructor(private service: JsonApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Concorsi> {
    console.log('Resolving !!');
    return this.service.getConcorsoById(route.params.id);
  }

}

