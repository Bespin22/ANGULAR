import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  template:''
})
export class RegistrationComponent {
  alertMessage: string = '';
  constructor(private http: HttpClient) { }
  

  onSubmit(f: NgForm) {
    //console.log("done")
    console.log(f.value)
    this.http.post<any>('https://logintask-deployment.onrender.com/register', f.value).subscribe(
      (response) => {
    //     showAlert(): void {
    //     this.alertMessage = 'This is an alert message.';
    //   }
    // }
    alert(response.message);
      }
        // handle successful login
      , (error) => {
        // handle failed login
        alert(error.error.detail)
      })
  }
}


function showAlert() {
  throw new Error('Function not implemented.');
}

