import { createAction, props } from "@ngrx/store";
import { authResponce } from "src/app/models/authResponse";

export const loginStart = createAction('loginStart',props<  {email:string ,password:string }>())
export const loginSuccess = createAction('loginSuccess',props<{api:authResponce}>())
export const errorMessg= createAction('errorMessg',props<{messg:string}>())

export const getloginStart = createAction('getloginStart',props<  {email:string ,password:string }>())
export const getloginSuccess = createAction('loginSuccess',props<{api:authResponce}>())
