import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSolicitudesComponent } from './ver-solicitudes.component';

describe('VerSolicitudesComponent', () => {
  let component: VerSolicitudesComponent;
  let fixture: ComponentFixture<VerSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
