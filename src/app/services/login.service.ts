import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Account } from '../accountDTO';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoggedClientEvent } from '../components/login/login.component';
import { UserStatusService } from './user-status.service';

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
          this.client.username = answer.username;
          this.client.id = answer.id;

          this.$clientIsLoggedIn.emit(this.client);
          this.router.navigate(['homepage']);
        }
      }
    })
  }

  loginUser(account:Account): Observable<Account> {
    
    return this.http.post<Account>('http://localhost:8084/data/account/login', account, {withCredentials:true});


    // , "withCredentials":true, this.httpHeader, ,  {"withCredentials":true, "headers": this.httpHeader, responseType: "json"}
      
   }

   private extractData(res: Response){
    let body = res;
    return body || {};
   }

   logoutClient(){
    let account = new Account(0, '', '');
    this.logOut(account).subscribe({
      next:(resp:Account)=>{
    
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
    let account = new Account(0, '', '');
    this.checkUserIsLoggedIn(account).subscribe({
        next:(resp:Account)=>{
          this.account = resp;
          if(this.account.username != null){
            this.client.username=resp.username;
            return;
          }else{
            this.router.navigate(['landing']);
          }
          

        }
    })
   }


   checkUserIsLoggedIn(account: Account): Observable<Account>{
    return this.http.post<Account>('http://localhost:8084/data/account/check', account);

    //{withCredentials:true}
   }

  
}


