import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  activity: string = 'skiing';
  apiURL: string = 'https://api.api-ninjas.com/v1/caloriesburned?activity=' + this.activity;
  headers: HttpHeaders = new HttpHeaders({'X-Api-Key':'X7FZxbL61bh3ye8C9rR32g==gCKBQIfj3XuKQ6K7'});
  constructor(private httpClient: HttpClient) {};
}



// const request = require('request');
// var activity = 'skiing';

// apiCall(activity){
//   request.get({
//     url: 'https://api.api-ninjas.com/v1/caloriesburned?activity=' + activity,
//     headers: {
//       'X-Api-Key': 'X7FZxbL61bh3ye8C9rR32g==gCKBQIfj3XuKQ6K7'
//     },
//   }, function(error: any, response: { statusCode: number; }, body: { toString: (arg0: string) => any; }) {
//     if(error) return console.error('Request failed:', error);
//     else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//     else console.log(body)
//   });
  
// }