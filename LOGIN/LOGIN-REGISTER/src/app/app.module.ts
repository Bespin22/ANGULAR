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
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes:Routes = [
  {path:'',component:LoginComponent},
  {path:'Register',component:RegistrationComponent},
  {path:'forgot-password',component:ForgotPasswordComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,  
    
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
