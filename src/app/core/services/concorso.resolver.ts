import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {ApiService} from './api.service';
import {Concorso} from '../models';
import {catchError} from 'rxjs/operators';


@Injectable()
export class ConcorsoResolver implements Resolve<Concorso> {

  constructor(private service: ApiService, private router: Router) {
  }

  /*
    Il resolver mi assicura che il concorso esista, se il concorso non esisto gli passo la costante EMPTY
  */

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    console.log('resolving', route.params.idConcorso);
    return this.service.getConcorsoById(route.params.idConcorso).pipe(
      catchError(
        () => {
          this.router.navigate(['/']);
          return EMPTY;
        }
      )
    );

  }

}

