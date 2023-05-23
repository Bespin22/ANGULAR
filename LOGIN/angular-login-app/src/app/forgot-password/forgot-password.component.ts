import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  onForgotPasswordSubmit() {
    // Call the password reset service to send a reset link to the provided email
    alert('Password reset link sent to ' + this.email);
  }
}
