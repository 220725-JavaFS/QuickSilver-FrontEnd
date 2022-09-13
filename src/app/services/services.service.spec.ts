import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Exercise } from '../exercise';
import { ExerciseComplete } from '../exercise-complete';

import { ServicesService } from './services.service';

describe('ServicesService', () => {
  let service: ServicesService;
  let httpClientySpy: jasmine.SpyObj<HttpClient>; // used in services file
  let APIEXC:Exercise[] = [
    {
      "name": "Skiing, water skiing",
      "calories_per_hour": 354,
      "duration_minutes": 60,
      "total_calories": 354
    },
    {
      "name": "Cross country snow skiing, slow",
      "calories_per_hour": 413,
      "duration_minutes": 60,
      "total_calories": 413
    }]
  let EXERC:ExerciseComplete[] = [{
    "date": "05/05/05",
    "name": "Downhill snow skiing, moderate",
    "durMin": 60,
    "totCal": 354
  },
  {
    "date": "05/05/05",
    "name": "Downhill snow skiing, racing",
    "durMin": 60,
    "totCal": 472
  }];

  
  beforeEach(() => {
    let httpClientySpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        ServicesService, 
        {
        provide: HttpClient, 
        useValue: httpClientySpyObj,
      },
    ],
    })
    service = TestBed.inject(ServicesService);
    httpClientySpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  })

  //getAllExercises(): ExerciseComplete[] array returns
  describe('getAllExercises()', () => {
    it('should return expected exercises from DAO when getAllExercises is called', () => {
      httpClientySpy.get.and.returnValue(of(EXERC));
      service.getAllExercises().subscribe({
        next: (exerc) => {
          expect(exerc).toEqual(EXERC);
        },
        error: () => {},
      });
      expect(httpClientySpy.get).toHaveBeenCalledTimes(1);
    });
  });




  describe('getExercise(activity:string)', () => {
    it('should return list of Exercises[] from API when called by activityName', () => {
      httpClientySpy.get.and.returnValue(of(APIEXC));
      service.getExercise('str').subscribe({
        next: (apiList) => {
          expect(apiList).toEqual(APIEXC);
        },
        error: () => {},
      });
      expect(httpClientySpy.get).toHaveBeenCalledTimes(1);
    });
  });
 

});

