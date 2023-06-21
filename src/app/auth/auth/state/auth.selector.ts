import {  createSelector,createFeatureSelector, State} from "@ngrx/store";
import {  AuthState} from "./auth.state";
import {  errorMessg} from "./auth.action";

export const getSelector = createFeatureSelector<AuthState>("NGRXauth")

export const getErrorMessage = createSelector(getSelector,(state)=>{
  return state.ErrorMessg
})
