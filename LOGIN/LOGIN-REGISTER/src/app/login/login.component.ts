import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username_or_email!: string ;
  password!: string;
  rememberMe!: boolean;
  showPassword: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.retrieveStoredCredentials();
  }

  retrieveStoredCredentials() {
    const storedCredentials = this.authService.getLoginCredentials();
    // console.log(storedCredentials)
    if (storedCredentials && storedCredentials.rememberMe) {
      this.username_or_email = storedCredentials.username;
       this.password=storedCredentials.password;
     this.rememberMe = storedCredentials.rememberMe;
    }
  }

  onSubmit(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }

    const encryptedPassword = this.authService.encrypt(loginForm.value.password);
    const username_or_email = loginForm.value.username_or_email;
    // console.log(encryptedPassword)
    // console.log(username_or_email)

    this.http.post<any>('https://logintask-deployment.onrender.com/login', {
      username_or_email,
      password: encryptedPassword
    }).subscribe(
      (response) => {
        if (this.rememberMe) {
          this.authService.storeLoginCredentials(username_or_email, encryptedPassword, this.rememberMe);
        } else {
          this.authService.clearLoginCredentials();
        }

        this.router.navigate(['/dashboard']);
        alert(response.message);
      },
      (error) => {
        alert(error.error.detail);
      }
    );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
