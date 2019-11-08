import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEsitiComponent } from './dialog-esiti.component';

describe('DialogEsitiComponent', () => {
  let component: DialogEsitiComponent;
  let fixture: ComponentFixture<DialogEsitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEsitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEsitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
