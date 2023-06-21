import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../State/Counter.state';
import { AppReducer } from 'src/app/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // counter:number=0 ;
mesg : string
  constructor(private store:Store<{NGRXcount:counterState}>) { }

  ngOnInit(): void {
this.store.select("NGRXcount").subscribe((data)=>{
  console.log(data.title)
  this.mesg=data.title})
  }

//   onIncrement(){
// return this.counter++
//   }
//   onDecrement(){
//     if(this.counter>0)
//     return this.counter--

//   }
//   onReset(){
//     return this.counter=0
//   }

}
