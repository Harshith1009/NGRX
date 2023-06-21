import { Component,DoCheck ,OnChanges,OnInit, SimpleChanges} from '@angular/core';
import {SwitchService  } from "./Services/switch.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEndTutorial';

  styleForRest :string
  constructor(private switcher:SwitchService){
}
ngOnInit(): void {
  // console.log(this.styleForRest)

}

ngDoCheck(): void {
this.styleForRest=  this.switcher.getSwitchRest()
// console.log(this.styleForRest)
}


}
