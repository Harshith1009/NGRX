import { createFeatureSelector, createSelector  } from "@ngrx/store";
import { counterState } from "./Counter.state";

const getCounterState = createFeatureSelector<counterState>("NGRXcount");

export const getCounter = createSelector(getCounterState,state=>{
  return state.counter
})

export const getTitle = createSelector(getCounterState,state=>{
  return state.title
})



