import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ExerciseComplete} from '../../exercise-complete';
import { Exercise } from 'src/app/exercise';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit { 
  
  constructor(private httpClient:HttpClient) { }
  exercises:ExerciseComplete[] = [];
  ///////////////////////////////////////
  lastWorkoutName: String = "";
  lastWorkoutDuration: number = 0;
  lastWorkoutCalories: number = 0;
  //////////////////////////////////////////
  dailyCalorieGoal: number = 0;
  caloriesBurnedToday: number = 0;
  //caloriesBurnedProgress

  ngOnInit(): void {
    this.getLastWorkout().subscribe(
      (response:ExerciseComplete[])=>{
        this.exercises=response;
        console.log(response);
        console.log("Date of your most recent workout: ", response[response.length-1].date);
        console.log("Duration of your most recent workout: ", response[response.length-1].durMin);
        console.log("Name of your most recent workout: ", response[response.length-1].name);
        console.log("Calories burned during your most recent workout: ", response[response.length-1].totCal);
        ////////////////////////////////////////////////////////////////
        
      }
    );
  }


  //function for grabbing most recently completed workout and return an object
  //will use this object to populate most recent workout

  url:string = "http://localhost:8084/data/workout/getWorkouts";
  //Pass in loged user id?

  // id:number
  getLastWorkout():Observable<ExerciseComplete[]>{
    return this.httpClient.get(this.url,{
        headers:{
        accept:"application/json"
      }
    }) as Observable<ExerciseComplete[]>;
  }






  //Function for grabbing user calorie goal, and calories burned for the day 
  getCalorieProgess(){


  } 



  // function to check how many days in a row that calories goal has been met
  getStreakCount(){
    
  }


}
