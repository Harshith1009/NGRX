import {createReducer,on  } from '@ngrx/store'
import {errorMessg, loginSuccess  } from "./auth.action";
import { initialState } from './auth.state'
import { state } from '@angular/animations';

const _authReducer = createReducer(initialState,
  on(loginSuccess ,(state,action)=>{
    return{
         ...state,
         user:action.api
}
  }),
on(errorMessg,(state,action)=>{
//  console.log(action.messg)
  return{
    ...state,
    ErrorMessg:action.messg
  }
})

  )


export function AuthReducer(state,action){
  return _authReducer(state,action)
}
