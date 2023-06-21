import { CRUD } from "src/app/models/CRUDoperation";

export interface CRUDstate {
  posts: CRUD[];

}



export const initialstate :CRUDstate = {
  posts:[
    {id:1,name:"Anaamika",age:25},
    {id:2,name:"Abhinaya",age:20},
    {id:3,name:"Kasargodu",age:10},
  ]
}
