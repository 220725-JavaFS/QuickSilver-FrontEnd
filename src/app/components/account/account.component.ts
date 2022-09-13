import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AccountSingletonModule } from 'src/app/account-singleton/account-singleton.module';
import { Account } from 'src/app/accountDTO';
import { Router } from '@angular/router';
import { Client } from 'src/app/clientDTO';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  constructor(private accountService: AccountService, private router: Router) {
    this.currentFName = AccountSingletonModule.fname;
    this.currentLName = AccountSingletonModule.lname;
    this.currentEmail = AccountSingletonModule.email;
    if (AccountSingletonModule.caloricGoal <= 0) {
      this.currentCalGoal = NaN;
    } else {
      this.currentCalGoal = AccountSingletonModule.caloricGoal;
    }
    this.newPassword = "";
    this.updatedUserInfo = false;
    this.updatedUserPassword = false;
  }

  currentFName: string;
  currentLName: string;
  currentEmail: string;
  currentCalGoal: number;
  newPassword: string;
  updatedUserInfo:boolean;
  updatedUserPassword:boolean;



  isLoggedIn(): boolean {
    return AccountSingletonModule.isLoggedIn;
  }

  updatePassword():void{
    let updatedClientData:Client = new Client(AccountSingletonModule.clientId,AccountSingletonModule.fname,AccountSingletonModule.lname,AccountSingletonModule.email,AccountSingletonModule.username, this.newPassword, AccountSingletonModule.caloricGoal);
    this.accountService.updatePassword(updatedClientData);
    this.updatedUserPassword = true;
  }

  updateUserData(): void {
    let updatedClientData: Client = new Client(AccountSingletonModule.clientId, this.currentFName, this.currentLName, this.currentEmail, AccountSingletonModule.username, AccountSingletonModule.password, this.currentCalGoal == NaN ? -1 : this.currentCalGoal);
    let newClientData = this.accountService.update(updatedClientData);
    if (newClientData == null) {
      return;
    }
    AccountSingletonModule.accountId = newClientData.id;
    AccountSingletonModule.fname = newClientData.fName;
    AccountSingletonModule.lname = newClientData.lName;
    AccountSingletonModule.email = newClientData.email;
    AccountSingletonModule.username = newClientData.username;
    AccountSingletonModule.password = newClientData.password;
    AccountSingletonModule.caloricGoal = newClientData.caloricGoal;
    this.updatedUserInfo = true;
  }






  ngOnInit(): void {
    if (!AccountSingletonModule.isLoggedIn) {
      this.router.navigate(["login"])
    }

  }

}
