import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfermaComponent } from './dialog-conferma.component';

describe('DialogConfermaComponent', () => {
  let component: DialogConfermaComponent;
  let fixture: ComponentFixture<DialogConfermaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConfermaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
