import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {JsonApiService} from '../../core/services/json-api.service';
import {Concorsi} from '../../core/models';
import {catchError} from 'rxjs/operators';


@Injectable()
export class ConcorsoResolver implements Resolve<Concorsi> {

  constructor(private service: JsonApiService) {
  }

  /*
    Il resolver mi assicura che il concorso esista, se il concorso non esisto gli passo la costante EMPTY
  */

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    console.log('resolving', route.params.id);
    return this.service.getConcorsoById(route.params.id).pipe(
      catchError(
        () => {
          return EMPTY;
        }
      )
    );

  }

}

