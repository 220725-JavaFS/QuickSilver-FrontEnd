import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from "../clientDTO"

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  // checkLoggedIn():boolean{
  //   //let clientDTO;
  //   console.log("checking")
  //   this.http.put<Client>("http://localhost:8084/data/client/loggedIn", ).subscribe({
  //     next:(client:Client) => {
  //       this.loggedIn = true;
  //       this.firstName=client.fName;
  //       this.lastName=client.lName;
  //       this.email=client.email;
  //       if(client.caloricGoal === null || client.caloricGoal <= 0){
  //         this.calorieGoal = NaN;
  //       }else{
  //         this.calorieGoal=client.caloricGoal;
  //       }
  //       console.log(client);
  //       return true;
  //     }
  //   })
  //   return false;
  // }



  update(newClientData: Client): Client {
    this.http.put<Client>("http://localhost:8084/data/client/" + newClientData.id.toString(), newClientData, { headers: { "Content-Type": "application/json" } }).subscribe({
      next(value: Client) {
        return value;
      },
    })
    return new Client(0, "", "", "", "", "", -1);
  }


  constructor(private http: HttpClient) {

  }
}
