import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDESComponent } from './ides.component';

describe('IDESComponent', () => {
  let component: IDESComponent;
  let fixture: ComponentFixture<IDESComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IDESComponent]
    });
    fixture = TestBed.createComponent(IDESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
