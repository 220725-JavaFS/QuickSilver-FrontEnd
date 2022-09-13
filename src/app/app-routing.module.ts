import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/register/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FoodComponent } from './components/food/food.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { AccountComponent } from './components/account/account.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
{
  path: "landing",
  component: LandingComponent
},

{
  path: "login",
  component: LoginComponent
},

{
  path: "signup",
  component: SignupComponent
},

{
  path: "homepage",
  component: HomepageComponent
},

{
  path: "food",
  component: FoodComponent
},

{
  path: "exercise",
  component: ExerciseComponent
},

{
  path: "account",
  component: AccountComponent
},

{
  path: "about",
  component: AboutComponent
},

{
  path: '',
  component: LandingComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
