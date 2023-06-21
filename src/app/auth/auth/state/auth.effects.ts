import { Injectable } from "@angular/core";
import { createEffect, ofType,Actions  } from "@ngrx/effects";
import { errorMessg, getloginStart, loginStart, loginSuccess,getloginSuccess } from "./auth.action";
import { mergeMap, map, catchError } from "rxjs/operators";
import { AuthServiceService } from "./../../../Services/auth-service.service";
import { of } from "rxjs";
import {  LoginService} from "./../../../Services/login.service";


@Injectable()
export class AuthEffects{
constructor(private action$:Actions,private authSerive:AuthServiceService, private loginSerive:LoginService){}

login$ = createEffect(()=>{
  return this.action$.pipe(ofType(loginStart),
  mergeMap((action)=>{
   return this.authSerive.signup(action.email,action.password)
   .pipe(map((data)=>{
    alert("Sucsessfully created an account")
    this.loginSerive.setPasskey(true)
    return loginSuccess({api:data});
  }),
  catchError((err)=>{
    // console.log(err.error.error.message)
    const error = err.error.error.message
    alert("Due to "+error+" you are denied")
    this.loginSerive.setPasskey(false)
    return of(errorMessg({messg:error}))

  })
   )
  })
  )
}
)

getLogin$ = createEffect(()=>{
  return this.action$.pipe(ofType(getloginStart),
  mergeMap((action)=>{
    return this.authSerive.getLoginData(action.email,action.password)
    .pipe(map((data)=>{
      return getloginSuccess({api:data})
    }))
  }))
})

}
