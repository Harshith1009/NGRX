  import { counterState } from "./couter/State/Counter.state";
import { CRUDstate } from "./home/state/CRUD.state";
import { counterReducer } from "./couter/State/Counter.reducer";
import {CRUD_reducer  } from "./home/state/CRUD.reducer";
import { AuthState } from "./auth/auth/state/auth.state";
import { AuthReducer } from "./auth/auth/state/auth.reducer";

  export interface AppState {
    counterstate: counterState
    CRUDstate:CRUDstate
    authState:AuthState
  }

  export const AppReducer={
    counterReducer:counterReducer,
    CRUDReducer:CRUD_reducer,
    authReducer:AuthReducer
  }
