import { createAction, props } from "@ngrx/store";


export const increment =createAction('increment',props<{value:number}>()) //events
export const decrement =createAction('decrement')
export const reset =createAction('reset')

