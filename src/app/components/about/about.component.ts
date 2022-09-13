import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExerciseComplete } from '../../exercise-complete';
import { Exercise } from 'src/app/exercise';
import { AccountSingletonModule } from 'src/app/account-singleton/account-singleton.module';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  exercises: ExerciseComplete[] = [];
  account: AccountSingletonModule = new AccountSingletonModule;
  
  ///////////////////////////////////////
  lastWorkoutDate: String = "";
  lastWorkoutName: String = "";
  lastWorkoutDuration: number = 0;
  lastWorkoutCalories: number = 0;
  date: Date = new Date;
  //////////////////////////////////////////
  // dailyCalorieGoal: number = 0;
  dailyCalorieGoal: String = "";
  caloriesBurnedToday: number = 0;
  //caloriesBurnedProgress

  ngOnInit(): void {
    this.checkIfUserIsLoggedIn();
  }

  checkIfUserIsLoggedIn() {
    this.loginService.checkUserLogin();
    this.getMostRecentWorkoutInfo();
    this.getAccountInfo();
    this.getCalorieGoal();
    console.log(this.getAccountInfo());
    console.log(AccountSingletonModule.clientId);
    console.log(AccountSingletonModule.email.toString());
  }


  url: string = "http://localhost:8084/data/workout/getWorkouts";
  // id:number
  getLastWorkout(): Observable<ExerciseComplete[]> {
    return this.httpClient.get(this.url, {
      headers: {
        accept: "application/json"
      }
    }) as Observable<ExerciseComplete[]>;
  }
  
  //Pass in loged user id?
  getMostRecentWorkoutInfo() {
    this.getLastWorkout().subscribe(
      (response: ExerciseComplete[]) => {
        this.exercises = response;
        this.lastWorkoutName = response[response.length - 1].name.toString();
        this.lastWorkoutDuration = response[response.length - 1].durMin;
        this.lastWorkoutCalories = response[response.length - 1].totCal;
        this.date = response[response.length - 1].date
        console.log(response);
        console.log("Date of your most recent workout: ", response[response.length - 1].date);
        console.log("Duration of your most recent workout: ", response[response.length - 1].durMin);
        console.log("Name of your most recent workout: ", response[response.length - 1].name);
        console.log("Calories burned during your most recent workout: ", response[response.length - 1].totCal);
      }
    );
  }


  url2: String = "/account";
  //Function for grabbing user calorie goal, and calories burned for the day 
  getAccountInfo(): Observable<AccountSingletonModule[]> {
    return this.httpClient.get(this.url, {
      headers: {
        accept: "application/json"
      }
    }) as Observable<AccountSingletonModule[]>;
  }

 getCalorieGoal(){
  this.getAccountInfo().subscribe(
    (res: AccountSingletonModule[]) => {
      // this.date = response[0];
      // this.caloriesBurnedToday = 
      this.dailyCalorieGoal= res[1].toString();
      
    }
  );
 }
 

  // function to check how many days in a row that calories goal has been met
  getStreakCount() {

  }


}
