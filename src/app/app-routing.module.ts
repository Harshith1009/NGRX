import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsTemplateComponent } from './forms-template/forms-template.component';
import { CounterComponent } from "./couter/counter/counter.component";
import { CounterButtonsComponent } from "./couter/counter-buttons/counter-buttons.component"
import {CounterOutputComponent  } from "./couter/counter-output/counter-output.component";
import{ HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthModule } from "./auth/auth/auth.module";
import { HeaderComponent } from './shared/header/header.component';
import { LoginDataComponent } from './login-data/login-data.component';
import { SignupComponent } from './login/signup/signup.component';


const routes: Routes = [
{
  path:'forms',
  component:FormsTemplateComponent,
  canActivate:[AuthModule]
},
{
  path:'counter',
  component:CounterComponent,
  canActivate:[AuthModule]

},
{
  path:'button',
  component:CounterButtonsComponent,
  canActivate:[AuthModule]

},
{
  path:'output',
  component:CounterOutputComponent,
  canActivate:[AuthModule]

},
{
  path:'home',
  component:HomeComponent,
  canActivate:[AuthModule]

},
{
  path:'header',
  component:HeaderComponent,
  canActivate:[AuthModule]

},
{
  path:'login',
  component:LoginComponent,
  children:[
    {path:'signup',component:SignupComponent}
  ]
},
{
  path:'getLogin',
  component:LoginDataComponent,
  canActivate:[AuthModule]
},
{
  path:'',
  redirectTo:'/login',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
