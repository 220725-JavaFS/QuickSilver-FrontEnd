import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
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
  userStatus: UserStatusService = new UserStatusService;

  client: LoggedClientEvent = {username: "", id:0}

  constructor(private http: HttpClient, private router: Router) { }

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
    
    return this.http.post<Account>('http://localhost:8084/data/account/login', account);
      
   }

   private extractData(res: Response){
    let body = res;
    return body || {};
   }

   logoutClient(){
    let account = new Account(0, '', '');
    this.logOut(account).subscribe({
      next:(resp:Account)=>{
      if(this.account !=null){
        this.client.username=resp.username;

        this.$clientIsLoggedOut.emit(this.client);
        this.userStatus=true;
        this.router.navigate(['landing']);
      }
     }
    })
   }

   logOut(account: Account): Observable<Account>{
    return this.http.post<Account>('http://localhost:8084/data/account/logOut', account);
   }   

  
}


