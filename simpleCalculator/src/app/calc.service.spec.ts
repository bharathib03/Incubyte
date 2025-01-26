import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CalcService],
    });

    service = TestBed.inject(CalcService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensures no unmatched requests
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call addData() and return a successful response', () => {
    const mockPayload = { value: '10' };
    const mockResponse = { result: 42 };

    service.addData('10').subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/addCalc/add`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockPayload);

    req.flush(mockResponse); // Simulate a successful response
  });

  it('should handle client-side error in handleError()', () => {
    const mockPayload = { value: '10' };
    const mockErrorEvent = new ErrorEvent('Network error', {
      message: 'Connection lost',
    });

    service.addData('10').subscribe({
      next: () => fail('Expected error, but got success response'),
      error: (error) => {
        expect(error).toBe('Error: Connection lost');
      },
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/addCalc/add`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockPayload);

    req.error(mockErrorEvent); // Simulate a client-side error
  });

});
