import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit { 


  
  constructor(private httpClient:HttpClient, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.checkIfUserIsLoggedIn();
  }

  checkIfUserIsLoggedIn(){
    this.loginService.checkUserLogin();
  }


  //function for grabbing most recently completed workout and return an object
  //will use this object to populate most recent workout

  getLastWorkout(id:number){
    // return this.httpClient.get(this.url,{
    //   headers:{
    //     accept: "application/json"
    //   }
    // }) as Observable<workout>;

  }


  //Function for grabbing user calorie goal, and calories burned for the day 
  getCalorieProgess(){

  } 



  // function to check how many days in a row that calories goal has been met
  getStreakCount(){
    
  }


}
