import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {ApiService} from './api.service';
import {Concorso} from '../models';
import {catchError, concatMap} from 'rxjs/operators';


@Injectable()
export class DomandaResolver implements Resolve<Concorso> {

  constructor(private service: ApiService) {
  }

  /*
    Il resolver mi assicura che il concorso esista, se il concorso non esisto gli passo la costante EMPTY
  */

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    console.log('resolving domanda', route.params.idConcorso);
    return this.service.getConcorsoById(route.params.idConcorso).pipe(
      catchError(
        () => {
          this.service.NotFound();
          return EMPTY;
        }
      ),
     concatMap( () => {
       return this.service.getDomandaById(route.params.idConcorso, route.params.idDomanda).pipe(
         catchError(
           () => {
             this.service.NotFound();
             return EMPTY;
           }
         )
       );
     })
    );

  }

}

