import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private http: HttpClient) { }

  onSubmit(f: NgForm) {
    //console.log("done")

    this.http.post<any>('https://logintask-deployment.onrender.com/login', f.value).subscribe(
      (response) => {
        // handle successful login
        
      }, (error) => {
        // handle failed login
        alert(error.error.detail)
      });
  }
}

