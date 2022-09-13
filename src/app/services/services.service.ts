import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from '../exercise';
import { ExerciseComplete } from '../exercise-complete';
import { AccountSingletonModule } from '../account-singleton/account-singleton.module';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  

  //gets all Exercises saved in the database
   getAllExercises():Observable<ExerciseComplete[]> {

    let id = AccountSingletonModule.clientId;
     return this.http.get<ExerciseComplete[]>('http://localhost:8084/data/workout/'+id);
   }



  //this function hasn't been tested yet, but includes the API Key with parameters 
  getExercise(activity:string): Observable<Exercise[]>{ //weight:number, duration:number
  
    let headersO = new HttpHeaders();
    headersO = headersO.set('X-Api-Key', 'WPuxNu8WHlbpi1EJBUkEVQ==Zz4KskIzm5tW3l8c');

    return this.http.get<Exercise[]>('https://api.api-ninjas.com/v1/caloriesburned?activity=' + activity, {'headers': headersO}) //params:params
  }

  // adds a single exercise to the database
  addExercise(e:ExerciseComplete): Observable<ExerciseComplete> {
    console.log(e);
    let id = AccountSingletonModule.clientId;
    return this.http.post<ExerciseComplete>('http://localhost:8084/data/workout/recordWorkout/'+id, e)
  }

 

}

