import { authResponce } from "./../../../models/authResponse";

export interface AuthState {
user:authResponce | null
ErrorMessg:string
}


export const initialState:AuthState = {
user:null,
ErrorMessg:''
}
