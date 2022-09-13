import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AccountSingletonModule {
  static isLoggedIn:boolean;
  static username:string;
  static password:string;
  static accountId:number;
  static clientId:number;
  static fname:string;
  static lname:string;
  static email:string;
  static caloricGoal:number;

}
