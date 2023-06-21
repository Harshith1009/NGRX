import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthState } from '../auth/auth/state/auth.state';
import { authResponce } from '../models/authResponse';

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.css']
})
export class LoginDataComponent implements OnInit {

  UserAPI:authResponce
  constructor(private service:AuthServiceService, private store:Store<{NGRXauth:AuthState}>) { }

  ngOnInit(): void {
    this.store.select('NGRXauth').subscribe((data)=>{
     this.UserAPI =  data.user
    })
  }

}
