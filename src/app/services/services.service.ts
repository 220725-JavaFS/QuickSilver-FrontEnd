import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from '../exercise';
import { ExerciseComplete } from '../exercise-complete';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  //gets all Exercises saved in the database
  getAllExercises():Observable<Exercise[]> {
    return this.http.get<Exercise[]>('http://localhost:4200/exercise');
  }



  //this function hasn't been tested yet, but includes the API Key with parameters 
  getExercise(activity:string): Observable<Exercise[]>{ //weight:number, duration:number
  
    let headersO = new HttpHeaders();
    headersO = headersO.set('X-Api-Key', 'WPuxNu8WHlbpi1EJBUkEVQ==Zz4KskIzm5tW3l8c');

    //let params = new HttpParams();
    //params = params.append('activity', activity);
    //params = params.append('weight', weight);
    //params = params.append('duration', duration);

    return this.http.get<Exercise[]>('https://api.api-ninjas.com/v1/caloriesburned?activity=' + activity, {'headers': headersO}) //params:params
  }

  //adds a single exercise to the database
  addExercise(e:ExerciseComplete): Observable<ExerciseComplete> {
    console.log(e);
    return this.http.post<ExerciseComplete>('http://localhost:4200/exercise', e)
  }
}

