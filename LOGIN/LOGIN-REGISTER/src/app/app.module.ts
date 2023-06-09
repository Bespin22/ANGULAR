import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule,Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes:Routes = [
  {path:'',component:LoginComponent},
  {path:'Register',component:RegistrationComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'dashboard',component:DashboardComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,RouterModule.forRoot(routes),
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
