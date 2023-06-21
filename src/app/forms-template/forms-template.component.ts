import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { CRUDstate } from '../home/state/CRUD.state';
import { CRUD } from '../models/CRUDoperation';
import { Store } from '@ngrx/store';
import { addData, editData } from '../home/state/CRUD.action';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forms-template',
  templateUrl: './forms-template.component.html',
  styleUrls: ['./forms-template.component.css']
})
export class FormsTemplateComponent implements OnInit {

  binding:string
  subjects = ["History","Civics","Political "]
  displayNone = 'none'
  displayBlock = 'block'
  stateData :CRUD[]
  formBuilder =new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5)]),
    password: new FormControl('',[Validators.pattern(/^(?=.*[0-9])/)]),
    checkboxs:new FormControl('',[Validators.requiredTrue])
  })

  CRUDform = new FormGroup({
  id:new FormControl(),
  name:new FormControl(null,[Validators.required,Validators.minLength(5)]),
  age:new FormControl(null,[Validators.required,Validators.minLength(2)])
  })

  tempCRUD:CRUD={
    id:null,
    name:null,
    age:null,
  }

  constructor(private store:Store<{NGRXcrud:CRUDstate}>,private service:ServicesService, private route :Router) { }

  ngOnInit(): void {
   this.tempCRUD=  this.service.getObject()
    this.store.select('NGRXcrud').subscribe((data)=>{
      this.stateData = data.posts
      console.log(this.stateData)
    })
  }

  onsubmit(value){
    console.log(value)
  }
  onsec(value){
    console.log(value)
  }

  CRUDsubmit(value)
  {
    console.log(value)
    const data:CRUD=
    {
      id:value.id,
      name:value.name,
      age:value.age
    }

   var flag = 0
   for(let val of this.stateData)
   {
     if(val.id===data.id)
     {
      flag =1
     }
   }

  if(flag===1)
  {
    alert('Id already exsists')
  }
  else
  {
    this.store.dispatch(addData({add:data}))
     // this.CRUDform.reset()
    alert("Submitted Successfully")
    this.route.navigateByUrl("/home")
  }

  }

  CRUDedit(value){
    this.store.dispatch(editData({edit:value}))
    this.route.navigateByUrl("/home")
    this.service.setObject(undefined)
  }



}
