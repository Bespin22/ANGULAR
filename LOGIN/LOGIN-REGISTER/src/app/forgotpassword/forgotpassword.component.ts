import { Component } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private http: HttpClient) { }

  onSubmit(f: NgForm) {
    
    this.http.put<any>('https://logintask-deployment.onrender.com/change_user_password', f.value).subscribe(
      (response) => {
        // handle successful login
        // alert("SUCCESSFUL")
        alert(response.message);

      }, (error) => {
        // handle failed login
        alert(error.error.detail)
      });
  }
}
