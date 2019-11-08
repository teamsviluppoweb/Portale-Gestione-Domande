import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private pageTitle = new Subject<any>();

  set(title: string) {
    this.pageTitle.next(title);
  }

  clear() {
    this.pageTitle.next();
  }

  get(): Observable<string> {
    return this.pageTitle.asObservable();
  }

  constructor() { }
}
