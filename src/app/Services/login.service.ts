import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  passkey:boolean
  login_Form_Opacity:string
  sign_up_toggle:boolean

  get_sign_up_toggle(){
    return this.sign_up_toggle
  }

  get_login_Form_Opacity(){
return this.login_Form_Opacity
  }

  set_login_Form_Opacity(value:string,value2:boolean){
    this.login_Form_Opacity = value
    this.sign_up_toggle=value2
  }

  getPasskey(){
return this.passkey
  }
  setPasskey(value:boolean){
    this.passkey = value
  }
  constructor() { }


}
