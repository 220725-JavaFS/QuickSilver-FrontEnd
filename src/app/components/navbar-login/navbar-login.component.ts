import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserStatusService } from 'src/app/services/user-status.service';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.css']
})
export class NavbarLoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  
  ngOnInit(): void {
  }

  LogoutUser(){
    this.loginService.logoutClient;
  }

  isLoggedIn:boolean = false;

}
