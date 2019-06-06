import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandaIaComponent } from './domanda-ia.component';

describe('DomandaIaComponent', () => {
  let component: DomandaIaComponent;
  let fixture: ComponentFixture<DomandaIaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomandaIaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomandaIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
