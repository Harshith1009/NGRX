import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwitchService } from '../Services/switch.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { loginStart } from '../auth/auth/state/auth.action';
import { AuthState } from '../auth/auth/state/auth.state';
import { getErrorMessage } from "../auth/auth/state/auth.selector";
import { LoginService } from '../Services/login.service';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,DoCheck  {

  email:string
  password:string
  API_error:string
  signUp_toggle:boolean
  login_Form_Opacity:string
  constructor(private route :Router,
    private switcher:SwitchService,
    private loginSerive:LoginService  ,
    private store :Store<{NGRXauth:AuthState}>,
    private httpAuth :AuthServiceService) { }

  ngOnInit(): void {
this.signUp_toggle=false
this.httpAuth.getLoginData(this.email,this.password).subscribe((data)=>{
  console.log(data)
})
  }

  ngDoCheck(): void {
this.login_Form_Opacity = this.loginSerive.get_login_Form_Opacity()
this.signUp_toggle = this.loginSerive.get_sign_up_toggle()
  }

  signUp(){
    // this.signUp_toggle = true
    this.route.navigateByUrl('/login/signup')
    this.loginSerive.set_login_Form_Opacity('0.5',true)
  }


  GetLoginIn(){

  //   this.store.select(getErrorMessage).subscribe((data)=>{
  // console.log(data)
  //   })

// console.log(this.loginSerive.getPasskey())
//     if(this.loginSerive.getPasskey()==true){
      this.switcher.setSwitchRest('block')
      this.route.navigateByUrl('/home')
//     }
//     else if(this.loginSerive.getPasskey()==undefined){
//       alert("Login failed")
//     }
//     console.log(this.loginSerive.getPasskey())

//     this.store.select("NGRXauth").subscribe((data)=>{
//       console.log(data.ErrorMessg)
//     })
  }

}
