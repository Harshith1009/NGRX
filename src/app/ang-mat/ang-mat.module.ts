import { NgModule } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from "@angular/material/card";

const materialComponent=[
  MatButtonModule,
MatInputModule,
MatButtonToggleModule,
MatMenuModule,
MatSidenavModule,
MatSelectModule,
MatIconModule,
MatToolbarModule,
MatSnackBarModule,
MatCardModule
]

@NgModule({
  exports: [materialComponent],
  imports: [materialComponent]
})
export class AngMatModule { }
