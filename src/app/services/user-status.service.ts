import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  public static isLoggedIn:boolean = false;

  constructor() { 
  }
}
