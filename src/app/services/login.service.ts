import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Account } from '../accountDTO';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoggedClientEvent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  account:Account = <Account>{};
  $clientIsLoggedIn = new EventEmitter();

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
}
