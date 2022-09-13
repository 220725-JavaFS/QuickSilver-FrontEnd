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
  
  ngOnInit(): void {
    this.checkIfUserIsLoggedIn();
  }

  checkIfUserIsLoggedIn() {
    this.loginService.checkUserLogin();
    this.getMostRecentWorkoutInfo();
    console.log(this.username);
    console.log(this.clientId, "<---- Client ID");
    console.log(this.fname, "<---- First Name");
    console.log(this.lname, "<---- Last Name");
    console.log(this.email, "<--- Email");
    console.log(this.caloricGoal, "<--- Daily Calorie Goal");
  }
  
  username: String = AccountSingletonModule.username;
  clientId: String = AccountSingletonModule.clientId.toString();
  fname: String = AccountSingletonModule.fname;
  lname: String = AccountSingletonModule.lname;
  email: String = AccountSingletonModule.email;
  caloricGoal: String = AccountSingletonModule.caloricGoal.toString();

  /////////////////////////////////
  exercises: ExerciseComplete[] = [];
  account: AccountSingletonModule = new AccountSingletonModule;
  lastWorkoutDate: String = "";
  lastWorkoutName: String = "";
  lastWorkoutDuration: number = 0;
  lastWorkoutCalories: number = 0;
  date: Date = new Date;
  dailyCalorieGoal: String = "";
  caloriesBurnedToday: number = 0;
  url: string = "http://localhost:8084/data/workout/getWorkouts";

  
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
}
