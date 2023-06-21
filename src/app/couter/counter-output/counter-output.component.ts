import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../State/Counter.state';
import {  Subscription } from 'rxjs';
import { getCounter } from "../State/Counter.selector";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit,OnDestroy {

  // @Input() counterNew;
  counterNew :number
  counterSubscription:Subscription
   constructor(private store:Store<{NGRXcount:counterState}>) { }

  ngOnInit(){
   this.counterSubscription =  this.store.select("NGRXcount").subscribe((data)=>{
   console.log(data.counter)
  this.counterNew=data.counter
    })
  }

  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe()
    }

  }

}
