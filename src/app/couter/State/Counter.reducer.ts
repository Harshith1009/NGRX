import { createReducer,on } from "@ngrx/store"
import { initialstate } from "./Counter.state";
import { decrement, increment,reset } from "./Counter.action";

const _counterReducer =   createReducer(initialstate,
  on(increment,(state,action)=>{
    console.log(action)
    if(action.value==0 || action.value==undefined){
    return{
          ...state,
          counter:state.counter+1,
          }
        }
      else{
        return{
          ...state,
          counter:state.counter+action.value,
          }
       }
  }),

  on(decrement,(state)=>{
    if(state.counter>0){
    return{
          ...state,
          counter:state.counter-1,
          }
    }
    else{
      alert("Cannot decrement below 0")
    }
  }),

  on(reset,(state)=>{
    return{
      ...state,
      counter:0,
      }
  }),
)


export function counterReducer(state,action){
  return _counterReducer(state,action)
}
