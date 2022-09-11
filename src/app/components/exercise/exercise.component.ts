import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/exercise';
import { ServicesService } from 'src/app/services/services.service';


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
  }
 
 /* addDateToOExercise(chosenExercise:Exercise):void{
    chosenExercise["date"] = ;
  }*/

  //this will add the exercise to the database through the services layer
  sendExercise(chosenExercise:Exercise): void {
      
    let e = new Exercise(chosenExercise.name, chosenExercise.caloriesPerHour, //not sure if i need the same name as shown on API
      chosenExercise.durationInMinutes, chosenExercise.totalCaloriesBurned)
          this.ss.addExercise(e); //.subscribe(
      }
    
}