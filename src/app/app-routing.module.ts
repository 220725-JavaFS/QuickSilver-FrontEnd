import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarLoginComponent } from './components/navbar-login/navbar-login.component';

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
  path: '',
  component: LandingComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
