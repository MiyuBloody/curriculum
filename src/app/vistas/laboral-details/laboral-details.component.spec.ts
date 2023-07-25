import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboralDetailsComponent } from './laboral-details.component';

describe('LaboralDetailsComponent', () => {
  let component: LaboralDetailsComponent;
  let fixture: ComponentFixture<LaboralDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaboralDetailsComponent]
    });
    fixture = TestBed.createComponent(LaboralDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
