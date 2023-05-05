import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;

  loginForm!: FormGroup

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.username === 'myusername' && this.password === 'mypassword') {
      console.log(this.loginForm.value);
      // TODO: navigate to the home page or set a flag to show the user is logged in
    } else {
      console.log("User not found")
      // TODO: display an error message to the user
    }
  }
}

  