import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchService } from 'src/app/Services/switch.service';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {  EffectsModule} from "@ngrx/effects";
import {  AuthEffects} from "../auth/state/auth.effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     EffectsModule.forRoot([AuthEffects]),
  ]
})
export class AuthModule implements CanActivate {

  constructor(private switcher :SwitchService, private route:Router){

  }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  if(this.switcher.getSwitchRest()=='block')
  return true
  else if(this.switcher.getSwitchRest()=='none'){
    this.route.navigateByUrl('/login')
    return false
  }
}

 }
