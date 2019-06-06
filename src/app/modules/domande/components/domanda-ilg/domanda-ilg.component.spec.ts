import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandaIlgComponent } from './domanda-ilg.component';

describe('DomandaIlgComponent', () => {
  let component: DomandaIlgComponent;
  let fixture: ComponentFixture<DomandaIlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomandaIlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomandaIlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
