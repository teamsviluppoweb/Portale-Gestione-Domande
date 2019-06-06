import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcorsoComponent } from './concorso.component';

describe('ConcorsoComponent', () => {
  let component: ConcorsoComponent;
  let fixture: ComponentFixture<ConcorsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcorsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
