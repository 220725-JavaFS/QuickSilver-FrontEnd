import { EventEmitter, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Account } from '../accountDTO';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoggedClientEvent } from '../components/login/login.component';
import { UserStatusService } from './user-status.service';
import { AccountSingletonModule } from 'src/app/account-singleton/account-singleton.module';
import { Client } from '../clientDTO';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  account:Account = <Account>{};
  $clientIsLoggedIn = new EventEmitter();

  $clientIsLoggedOut = new EventEmitter();
  

  httpHeader:HttpHeaders = new HttpHeaders().set("Access-Control-Allow-Origin", "http://localhost:8084/data/account/login").set("Access-Control-Allow-Credentials", 'true');

  httpOptions = {"withCredentials":true, "Access-Control-Allow-Origin":"Http://localhost"};

  client: LoggedClientEvent = {username: "", id:0}

  constructor(private http: HttpClient, private router: Router, private userStatus:UserStatusService) { }


  loginClient(username:string, password:string){
    let account = new Account(0,username,password);
    this.loginUser(account).subscribe({
      next:(answer:Account)=>{
        this.account=answer;
        if(this.account != null){
          AccountSingletonModule.username = answer.username;
          AccountSingletonModule.accountId=answer.id;
          AccountSingletonModule.isLoggedIn=true;
          AccountSingletonModule.clientId= answer.id;
            this.getClientInfoByAccountId();

          this.$clientIsLoggedIn.emit(this.client);
          this.router.navigate(['homepage']);
        }
      }
    })
  }

  loginUser(account:Account): Observable<Account> {
    
    return this.http.post<Account>('http://localhost:8084/data/account/login', account);


    // , "withCredentials":true, this.httpHeader, ,  {"withCredentials":true, "headers": this.httpHeader, responseType: "json"}, {withCredentials:true}
   }

   private extractData(res: Response){
    let body = res;
    return body || {};
   }

   getClientInfoByAccountId(){
    let id = AccountSingletonModule.clientId;
    this.getClientInfo(id).subscribe({
      next:(resp:Client)=>{
        AccountSingletonModule.email=resp.email;
        AccountSingletonModule.fname=resp.fName;
        AccountSingletonModule.lname=resp.lName;
        AccountSingletonModule.caloricGoal=-1; //TODO ADD CALORIC GOAL MATT
      }
    })
   }

   getClientInfo(id:number){
    return this.http.get<Client>('http://localhost:8084/data/client/'+id);
   }


   logoutClient(){
    let account = new Account(0, '', '');
    this.logOut(account).subscribe({
      next:(resp:Account)=>{
        AccountSingletonModule.username='';
        AccountSingletonModule.accountId=0;
        AccountSingletonModule.email='';
        AccountSingletonModule.fname='';
        AccountSingletonModule.password='';
        AccountSingletonModule.lname='';
        AccountSingletonModule.caloricGoal=0;
        AccountSingletonModule.clientId=0;
        AccountSingletonModule.isLoggedIn=false;
    
        this.$clientIsLoggedOut.emit(this.client);
        this.userStatus=true;
        this.router.navigate(['landing']); 
        
     }
    })
   }

   logOut(account: Account): Observable<Account>{
    return this.http.post<Account>('http://localhost:8084/data/account/logout', account);

    //{withCredentials:true}
   }   


   checkUserLogin(){
    if(AccountSingletonModule.isLoggedIn==true){
      return;
    }else{
      this.router.navigate(['landing']);
    }




  //  checkUserIsLoggedIn(account: Account): Observable<Account>{
  //   return this.http.post<Account>('http://localhost:8084/data/account/check', account);

    //{withCredentials:true}
   }

  
}
