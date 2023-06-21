import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {


  styleForRest:string='none'
  constructor() { }
  getSwitchRest(){
    return this.styleForRest
  }
  setSwitchRest(value){
    this.styleForRest = value
  }

}
