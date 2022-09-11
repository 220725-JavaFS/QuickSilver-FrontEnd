import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../clientDTO';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  client:Client = <Client>{};
  $clientIsSignedUp = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) { }

  registerClient(fName:string, lName:string, email:string, username:string, password:string){
    let client = new Client(0, fName, lName, email, username, password);
    this.registerNewUser(client).subscribe({
      next:(answer:Client)=>{
        this.client=answer;
        if(this.client != null){
          this.client.username = answer.username;
          this.client.id = answer.id;

          this.$clientIsSignedUp.emit(this.client);
          this.router.navigate(['homepage']);
        }
      }
    })

  }

  registerNewUser(client:Client): Observable<Client>{
    return this.http.post<Client>('http://localhost:8084/data/client/register', client);
  }
}
