import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-add-calc',
  templateUrl: './add-calc.component.html',
  styleUrls: ['./add-calc.component.css'],

})
export class AddCalcComponent implements OnInit {
  inputNum : string = '';
  errorMessage: any;

  constructor(private calcService: CalcService) { }
 
  ngOnInit(): void {
    
  }
  addData(): void {
    this.calcService.addData(this.inputNum).subscribe({
      next: (response) => {
        console.log('Data added successfully:', response);
      },
      error: (error) => {
        this.errorMessage = error;
        console.error('Error adding data:', error);
      },
    });
  }

}
