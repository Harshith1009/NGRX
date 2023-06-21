import { Injectable } from '@angular/core';
import { CRUD } from '../models/CRUDoperation';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  Object: CRUD

  getObject(){
    return this.Object
  }
  setObject(item:CRUD){
    this.Object = item
  }


}
