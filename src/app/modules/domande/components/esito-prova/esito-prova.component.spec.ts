import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsitoProvaComponent } from './esito-prova.component';

describe('EsitoProvaComponent', () => {
  let component: EsitoProvaComponent;
  let fixture: ComponentFixture<EsitoProvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsitoProvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsitoProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
