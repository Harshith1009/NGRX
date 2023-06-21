import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SwitchService } from 'src/app/Services/switch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router , private switcher:SwitchService) { }

  ngOnInit(): void {
  }

  navCounter(){

    this.route.navigateByUrl('/counter')
  }

  navforms(){
    this.route.navigateByUrl('/forms')

  }
  navLoginout(){
    this.route.navigateByUrl('/')
    this.switcher.setSwitchRest('none')
  }
  navLogin(){
    this.route.navigateByUrl('/getLogin')

  }
}
