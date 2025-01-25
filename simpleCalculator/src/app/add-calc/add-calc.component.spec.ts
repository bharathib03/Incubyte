import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddCalcComponent } from './add-calc.component';

describe('AddCalcComponent', () => {
  let component: AddCalcComponent;
  let fixture: ComponentFixture<AddCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCalcComponent],
      imports: [FormsModule], // Required for ngModel or two-way binding
    }).compileComponents();

    fixture = TestBed.createComponent(AddCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize inputNum as an empty string', () => {
    expect(component.inputNum).toBe('');
  });

  it('should log messages correctly when add() is called', () => {
    spyOn(console, 'log'); // Spy on console.log to track calls

    component.inputNum = '42'; // Set a sample value for inputNum
    component.add(); // Call the method

    expect(console.log).toHaveBeenCalledWith('Add is clicked'); // Check first log
    expect(console.log).toHaveBeenCalledWith('Val is ', '42'); // Check second log
  });

  it('should handle empty inputNum in add()', () => {
    spyOn(console, 'log');

    component.inputNum = ''; // Set inputNum to an empty string
    component.add(); // Call the method

    expect(console.log).toHaveBeenCalledWith('Add is clicked');
    expect(console.log).toHaveBeenCalledWith('Val is ', ''); // Empty value check
  });
});
