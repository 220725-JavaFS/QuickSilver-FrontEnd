import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/accountDTO';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientUsername: string = '';
  clientPassword: string = '';
  account:Account = <Account>{};

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  LoginUser(){
      console.log("I have been called");
      this.loginService.loginClient(this.clientUsername,this.clientPassword);
      }


  }

  
      
  export interface LoggedClientEvent{
    username: string;
    id: number;
  }


