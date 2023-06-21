import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import {  increment } from '../State/Counter.action';
import { decrement } from '../State/Counter.action';
import { reset } from '../State/Counter.action';
import { counterState } from '../State/Counter.state';
import { FormControl, FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  CustomeCounter : number
  formBuilder = new FormGroup(
  {
    isCheck :new FormControl('',Validators.required)
  }
  )
  // @Output() Increment =new EventEmitter();
  // @Output() Decrement =new EventEmitter();
  // @Output() Rest =new EventEmitter();

  constructor(private store:Store<{counter:counterState}>) { }  //NGRXcount : same name in theStoreModule in app module

  ngOnInit(): void {
  }

  justIncrement(){
    // this.Increment.emit()
    this.store.dispatch(increment({value:this.CustomeCounter}))

  }

  justDeccrement(){
    // this.Decrement.emit()
    this.store.dispatch(decrement())
  }
  justReset(){
    // this.Rest.emit()
    this.store.dispatch(reset())
  }


}
