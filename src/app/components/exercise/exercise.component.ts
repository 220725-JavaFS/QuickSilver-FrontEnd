import { Component, OnInit } from '@angular/core';

import { Exercise } from 'src/app/exercise';
import { ExerciseComplete } from 'src/app/exercise-complete';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {


  //activity will be what the user will select.
  activity:string = '';
  //the getExercises will return an array in Json format
  activityList:Exercise[] = [];
  date:Date = new Date();
  durationInMinutes:number = 30; //default
  // this will display a list of their current exercises from the database
  chosenExercise:Exercise = <Exercise>{};  // is this how to create an empty object?o.O
  exercises:Exercise[] = [];

  
  constructor(private ss: ServicesService) {}


  ngOnInit(): void {
    this.getExercises();
  }

  getExercises() {
    this.ss.getAllExercises().subscribe(
      (response: Exercise[]) => {
        this.exercises = response;
      }
    )
  }

  getActivityList(){
    this.ss.getExercise(this.activity).subscribe( //this.weight,this.duration
      (response: any) => { //Exercise[] had this previous on response:any
                 let pstring = JSON.stringify(response);
                 let fullp = JSON.parse(pstring);
                 if (fullp) {
                this.activityList=response;
              }})

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.checkIfUserIsLoggedIn();

  }
 

 /* addDateToOExercise(chosenExercise:Exercise):void{
    chosenExercise["date"] = ;
  }*/


  //this will add the exercise to the database through the services layer
  sendExercise(chosenExercise:Exercise): void {
    
    let totalCaloriesBurned:number = Math.round(this.durationInMinutes*(chosenExercise.calories_per_hour/60));
    
    let e = new ExerciseComplete(this.date, chosenExercise.name,
      this.durationInMinutes, totalCaloriesBurned)
          this.ss.addExercise(e); //.subscribe(
      }
    
}

  checkIfUserIsLoggedIn(){
    this.loginService.checkUserLogin();
}

}

