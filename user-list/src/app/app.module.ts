import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalUsersComponent } from './total-users/total-users.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const routes: Routes = [
  {path:'',component:TotalUsersComponent},
  {path:'adduser',component:AddUserComponent},

]

@NgModule({
  declarations: [
    
    AppComponent,
    TotalUsersComponent,
    SideBarComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes),Component,FormGroup,FormControl,
    Validators,NgForm,HttpClient,FormsModule, BrowserAnimationsModule,MatTableModule,MatPaginatorModule,SideBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
