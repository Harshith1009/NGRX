import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CRUDstate } from './state/CRUD.state';
import { Observable } from 'rxjs';
import { ServicesService } from "../Services/services.service";
import { CRUD } from '../models/CRUDoperation';
import { Router } from '@angular/router';
import { deleteData } from './state/CRUD.action';
import { authResponce } from '../models/authResponse';
import { AuthState } from '../auth/auth/state/auth.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

mainData:CRUD[]
authDataShowing:authResponce

  constructor(private store:Store<{NGRXcrud:CRUDstate,NGRXauth:AuthState}>,private service :ServicesService,private route:Router) { }

  ngOnInit(): void {
   this.store.select("NGRXcrud").subscribe((data)=>{
      this.mainData = data.posts
      console.log(this.mainData)
    })
  }

  editNGRX(item:CRUD){
    // console.log(item)
this.route.navigateByUrl("/forms")
    this.service.setObject(item)
  }

  deleteNGRX(item){
    if(confirm("Do you want to delete"))
    this.store.dispatch(deleteData({delete:item}))

  }

}
