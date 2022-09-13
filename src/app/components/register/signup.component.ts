import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/clientDTO';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  clientFName:string = '';
  clientLName:string = '';
  clientEmail:string = '';
  clientUsername:string = '';
  clientPassword:string = '';
  client:Client = <Client>{};
  
  constructor(private registerService: RegisterService, private route: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.registerService.registerClient(this.clientFName, this.clientLName, this.clientEmail, this.clientUsername, this.clientPassword);
  }

}
