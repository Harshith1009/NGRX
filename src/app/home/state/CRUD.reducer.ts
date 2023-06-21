import { createReducer,on } from "@ngrx/store";
import {  initialstate} from "./CRUD.state";
import {addData, deleteData, editData } from "./CRUD.action";


const _crudReducer = createReducer(initialstate,
on(addData,(state,action)=>{
  console.log(action)
  return{
    ...state,
    posts:state.posts.concat(action.add)
  }
}),

on(editData,(state,action)=>{
console.log(action)
const updatedPosts = state.posts.map((item)=>{
  return  action.edit.id == item.id ? action.edit : item
})
return{
  ...state,
  posts:updatedPosts
}
}),

on(deleteData,(state,action)=>{
const DeletingPost=  state.posts.filter((item)=>{
  return action.delete.id !== item.id
})
console.log(DeletingPost)
return{
  ...state,
  posts:DeletingPost
}


})

  )


export function CRUD_reducer(state,action){
return _crudReducer(state,action)
}
