import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-calc',
  templateUrl: './add-calc.component.html',
  styleUrls: ['./add-calc.component.css'],

})
export class AddCalcComponent implements OnInit {
  inputNum : string = '';

  constructor() { }
 
  ngOnInit(): void {
    
  }

  add(){
    console.log("Add is clicked")
    console.log("Val is ",this.inputNum)
  }

}
