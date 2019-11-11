import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {PageTitleService} from '../../core/services/page-title.service';
import {Router} from '@angular/router';
import {ApiService} from '../../core/services';


@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit, OnDestroy {

  @ViewChild('drawer', { static: true }) topbarDrawer: MatDrawer;
  pageTitle: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  showMenu: boolean;

  gotoDomanda;
  gotoEsito;

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private apiService: ApiService,
              private cdRef: ChangeDetectorRef,
              private pageTitleService: PageTitleService) {
    this.showMenu = false;
  }

  ngOnInit() {
    this.pageTitleService.get().subscribe( (title: string) => {
      this.pageTitle = title;
    });

    this.apiService.getMessage().subscribe(
      (x) => {
        if(x) {
          this.gotoDomanda = '/concorsi/' + x.idConcorso + '/domanda/' + x.idDomanda;
          this.gotoEsito = '/concorsi/' + x.idConcorso + '/domanda/' + x.idDomanda + '/esito';
          this.showMenu = true;
          console.log(this.gotoDomanda);
        } else {
          this.showMenu = false;
        }
        this.cdRef.detectChanges();

      }
    );

  }

  MenuIconState() {
    if (this.topbarDrawer.opened ) {
      return 'close';
    }
    return 'menu';
  }


  closeDialog() {
    this.topbarDrawer.toggle();
  }

  CloseNavBar() {
    this.topbarDrawer.toggle();
  }

  ngOnDestroy(): void {
    this.pageTitleService.clear();
  }

  isInCandidato() {
   return true;
  }

  checkMenu() {
    return this.showMenu;
  }
}
