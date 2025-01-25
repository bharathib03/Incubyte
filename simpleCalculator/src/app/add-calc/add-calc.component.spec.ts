import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalcComponent } from './add-calc.component';

describe('AddCalcComponent', () => {
  let component: AddCalcComponent;
  let fixture: ComponentFixture<AddCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
