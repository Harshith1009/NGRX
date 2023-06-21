import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/Services/login.service';
import { loginStart } from 'src/app/auth/auth/state/auth.action';
import { AuthState } from 'src/app/auth/auth/state/auth.state';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store :Store<{NGRXauth:AuthState}>,private router :Router,private loginSerive:LoginService ) { }
  email:string
  password:string

  ngOnInit(): void {
  }
  async GetSignIn(){
   this.store.dispatch(loginStart({email:this.email,password:this.password}))
    this.loginSerive.set_login_Form_Opacity('1',false)
    this.router.navigateByUrl('/login')
  }
}
