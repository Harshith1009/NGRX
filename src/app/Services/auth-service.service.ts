import { Injectable } from '@angular/core';
import {HttpClient  } from "@angular/common/http";
import {  environment} from "./../../environments/environment";
import { Observable } from 'rxjs';
import { authResponce } from "./../models/authResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient ) { }

  signup(email:string,password:string):Observable<authResponce>{
    return this.http.post<authResponce>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.API_KEY}`,{email,password,returnSecureToken:true})
  }

  getLoginData(email:string,password:string){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${environment.API_KEY}`,{email,password,returnSecureToken:true})
  }


}
