import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  // email: string;
  // password: string;

  constructor(private authService: AuthService, private router: Router) {}

  onRegisterSubmit() {
    // Call the authentication service to handle registration logic
    if (this.authService.register(this.username, this.email, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Registration failed');
    }
  }
}
