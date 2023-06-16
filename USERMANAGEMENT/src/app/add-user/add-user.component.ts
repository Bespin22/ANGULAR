import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private http: HttpClient) { }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.http.post<any>('https://logintask-deployment.onrender.com/register', f.value).subscribe(
      (response) => {
        alert(response.message);
      },
      (error) => {
        console.error(error);
        alert('An error occurred while submitting the form.');
      }
    );
  }
}  