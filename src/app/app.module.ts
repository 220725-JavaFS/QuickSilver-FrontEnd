import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarLoginComponent } from './components/navbar-login/navbar-login.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarHomemenuComponent } from './components/navbar-homemenu/navbar-homemenu.component';
import { NavbarHomeaccountComponent } from './components/navbar-homeaccount/navbar-homeaccount.component';
import { FoodComponent } from './components/food/food.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { AccountComponent } from './components/account/account.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    NavbarLoginComponent,
    NavbarMenuComponent,
    SignupComponent,
    HomepageComponent,
    NavbarHomemenuComponent,
    NavbarHomeaccountComponent,
    FoodComponent,
    ExerciseComponent,
    AccountComponent,
    AboutComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
