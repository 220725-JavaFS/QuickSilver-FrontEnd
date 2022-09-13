import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Exercise } from 'src/app/exercise';
import { ExerciseComplete } from 'src/app/exercise-complete';
import { ServicesService } from 'src/app/services/services.service';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

<<<<<<< Updated upstream
//activity will be what the user will select.
  activity:string = '';
=======
  //activity will be what the user will select.
  activity: string = '';
>>>>>>> Stashed changes
  //the getExercises will return an array in Json format
  activityList: Exercise[] = [];
  date: string = "09/13/2022";
  durationInMinutes: number = 30; //default
  // this will display a list of their current exercises from the database
<<<<<<< Updated upstream
  chosenExercise:Exercise = <Exercise>{};  // is this how to create an empty object?o.O
  exercisesComplete:ExerciseComplete[] = [];
=======
  chosenExercise: Exercise = <Exercise>{};  // is this how to create an empty object?o.O
  exercisesComplete: ExerciseComplete[] = [];
  exerciseRetrieved: ExerciseComplete = new ExerciseComplete("e", "e", 1, 1);

  isBool: boolean = false;

  constructor(private ss: ServicesService) { }
>>>>>>> Stashed changes

  constructor(private loginService: LoginService, private router: Router, private ss: ServicesService) { }

  ngOnInit(): void {
    this.checkIfUserIsLoggedIn();
    this.getExercises();
  }

<<<<<<< Updated upstream
  checkIfUserIsLoggedIn(){
    this.loginService.checkUserLogin();
}

=======
  booleanFunction(): void {
    this.isBool = !this.isBool;
  }

  //get by ID
>>>>>>> Stashed changes
  getExercises() {
    this.ss.getAllExercises().subscribe(
      (response: ExerciseComplete[]) => {
        this.exercisesComplete = response;
      }
    )
  }

  getActivityList() {
    this.ss.getExercise(this.activity).subscribe( //this.weight,this.duration
      (response: any) => { //Exercise[] had this previous on response:any
        let pstring = JSON.stringify(response);
        let fullp = JSON.parse(pstring);
        if (fullp) {
          this.activityList = response;
        }
      })
  }




  //this will add the exercise to the database through the services layer
  sendExercise(chosenExercise: Exercise): void {


    let totalCaloriesBurned: number = Math.round(this.durationInMinutes * (chosenExercise.calories_per_hour / 60));

    var e = new ExerciseComplete(this.date, chosenExercise.name,
      this.durationInMinutes, totalCaloriesBurned)
    this.ss.addExercise(e).subscribe(
      (response: ExerciseComplete) => {
        this.exerciseRetrieved = response;
      })
      
      this.getExercises();
  }

      
      
      

}
