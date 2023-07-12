import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosDatosComponent } from './otros-datos.component';

describe('OtrosDatosComponent', () => {
  let component: OtrosDatosComponent;
  let fixture: ComponentFixture<OtrosDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtrosDatosComponent]
    });
    fixture = TestBed.createComponent(OtrosDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
