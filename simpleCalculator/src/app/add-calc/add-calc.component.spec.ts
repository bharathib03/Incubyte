import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddCalcComponent } from './add-calc.component';
import { CalcService } from '../calc.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import this

describe('AddCalcComponent', () => {
  let component: AddCalcComponent;
  let fixture: ComponentFixture<AddCalcComponent>;
  let calcServiceMock: jasmine.SpyObj<CalcService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CalcService', ['addData']);

    await TestBed.configureTestingModule({
      declarations: [AddCalcComponent],
      imports: [FormsModule, HttpClientTestingModule], // Required for ngModel or two-way binding
    }).compileComponents();

    calcServiceMock = TestBed.inject(CalcService) as jasmine.SpyObj<CalcService>;
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AddCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call calcService.addData() and handle success response', () => {
    // Mock a successful response
    const mockResponse = { result: 6 };
    calcServiceMock.addData.and.returnValue(of(mockResponse));

    component.inputNum = '123';
    component.addData();

    expect(calcServiceMock.addData).toHaveBeenCalledWith('123');
    expect(calcServiceMock.addData).toHaveBeenCalledTimes(1);
  });

  it('should handle error response from calcService.addData()', () => {
    // Mock an error response
    const mockError = 'Error adding data';
    calcServiceMock.addData.and.returnValue(throwError(() => mockError));

    component.inputNum = '123';
    component.addData();

    expect(calcServiceMock.addData).toHaveBeenCalledWith('123');
    expect(component.errorMessage).toBe(mockError);
  });



});
