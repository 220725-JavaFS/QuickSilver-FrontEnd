import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar-homemenu',
  templateUrl: './navbar-homemenu.component.html',
  styleUrls: ['./navbar-homemenu.component.css']
})
export class NavbarHomemenuComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  LogoutClientNav(){
    console.log("I have been called in the nav-bar-menu")
    this.loginService.logoutClient();
  }

}
