import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {ApiService} from './api.service';
import {Concorso} from '../models';
import {catchError} from 'rxjs/operators';


@Injectable()
export class ConcorsoResolver implements Resolve<Concorso> {

  constructor(private service: ApiService) {
  }

  /*
    Il resolver mi assicura che il concorso esista, facendo una chiamata http sul singolo concorso
     se il concorso non esiste gli passo la costante EMPTY
  */

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {


    return this.service.getConcorsoById(route.params.idConcorso).pipe(
      catchError(
        () => {
          this.service.NotFound();
          return EMPTY;
        }
      )
    );

  }

}

