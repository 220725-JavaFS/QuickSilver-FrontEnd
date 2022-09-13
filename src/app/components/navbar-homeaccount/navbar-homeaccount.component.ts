import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar-homeaccount',
  templateUrl: './navbar-homeaccount.component.html',
  styleUrls: ['./navbar-homeaccount.component.css']
})
export class NavbarHomeaccountComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  LogoutClientNav(){
    console.log("I have been called in the nav-bar-menu")
    this.loginService.logoutClient();
  }

}
