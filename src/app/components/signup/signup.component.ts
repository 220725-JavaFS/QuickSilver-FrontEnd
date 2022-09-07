import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  //example of a sample. creating a new object
  placeHolder = new Register(1,"First Name", "Last Name","Username","Email","Password");
  
  //initially the submitted button will be false
  submitted = false;
  // once information is filled correctly, will call onSubmit and should
  // pass new values into the server
  onSubmit(){this.submitted = true;}

  constructor() { }

  ngOnInit(): void {
  }

}
