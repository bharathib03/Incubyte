import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddCalcComponent } from './add-calc.component';
import { CalcService } from '../calc.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import this

describe('AddCalcComponent', () => {
  let component: AddCalcComponent;
  let fixture: ComponentFixture<AddCalcComponent>;
  let calcService: CalcService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCalcComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [CalcService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCalcComponent);
    component = fixture.componentInstance;
    calcService = TestBed.inject(CalcService); // Inject CalcService
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call addData() and handle successful response', () => {
    const mockResponse = { result: 42 };
    spyOn(calcService, 'addData').and.returnValue(of(mockResponse));
    spyOn(console, 'log'); 
    component.inputNum = '10';
    component.addData();

    expect(calcService.addData).toHaveBeenCalledWith('10');
    expect(component.showResult).toBeTrue();
    expect(component.showRedMsg).toBeFalse();
    expect(component.finalOutput).toBe(42);
    expect(console.log).toHaveBeenCalledWith('Data added successfully:', mockResponse);
  });

  it('should call addData() and handle error response', () => {
    const mockError = 'Error adding data';
    spyOn(calcService, 'addData').and.returnValue(throwError(() => mockError)); // Mock service error

    component.inputNum = '10';
    component.addData();

    expect(calcService.addData).toHaveBeenCalledWith('10');
    expect(component.showResult).toBeFalse();
    expect(component.errorMessage).toBe(mockError);
  });

  it('should reset flags when clearInput() is called', () => {
    component.showResult = true;
    component.showRedMsg = true;

    component.clearInput();

    expect(component.showResult).toBeFalse();
    expect(component.showRedMsg).toBeFalse();
    expect(component.inputNum).toBe('');
  });
});
