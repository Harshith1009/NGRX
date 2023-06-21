import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsTemplateComponent } from './forms-template/forms-template.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngMatModule } from "./ang-mat/ang-mat.module";
import { CounterComponent } from './couter/counter/counter.component';
import { CounterButtonsComponent } from './couter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './couter/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from "./couter/State/Counter.reducer";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppReducer } from "./app.state";
import { LoginComponent } from './login/login.component';
import {AuthModule  } from "./auth/auth/auth.module";
import {  EffectsModule} from "@ngrx/effects";

import { HttpClientModule } from '@angular/common/http';
import { LoginDataComponent } from './login-data/login-data.component';
import { SignupComponent } from './login/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsTemplateComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    LoginDataComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngMatModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    // StoreModule.forRoot({
    //   NGRXcount:counterReducer,
    // }),

    StoreModule.forRoot({
      NGRXcount:AppReducer.counterReducer,
      NGRXcrud:AppReducer.CRUDReducer,
      NGRXauth:AppReducer.authReducer
    }),

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
