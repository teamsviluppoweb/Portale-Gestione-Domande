import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PageTitleService} from '../../core/services/page-title.service';


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

  constructor(private breakpointObserver: BreakpointObserver,
              private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.get().subscribe( (title: string) => {
      this.pageTitle = title;
    });
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

}
