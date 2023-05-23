import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})



export class ForgotPasswordComponent {
  email: string = '';
  message: string = ''

  onForgotPasswordSubmit() {
    // Call the password reset service to send a reset link to the provided email
    // https://logintask-deployment.onrender.com/change_user_password
    alert('Password reset link sent to ' + this.email);
  }
}


// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-forgot-password',
//   template: `
//     <h2>Forgot Password</h2>
//     <form (ngSubmit)="submitForm()">
//       <div>
//         <label>Email:</label>
//         <input type="email" [(ngModel)]="email" name="email" required>
//       </div>
//       <button type="submit">Reset Password</button>
//     </form>
//     <div *ngIf="message">{{ message }}</div>
//   `,
// })
// export class ForgotPasswordComponent {
//   email: string = ''
//   message: string = ''
  

//   constructor(private http: HttpClient) {}

//   submitForm() {
//     const apiUrl = 'https://logintask-deployment.onrender.com/change_user_password';
//     const requestData = { email: this.email };

//     this.http.post(apiUrl, requestData).subscribe(
//       () => {
//         this.message = 'Password reset link has been sent to your email.';
//       },
//       (error) => {
//         this.message = 'An error occurred. Please try again later.';
//         console.error(error);
//       }
//     );
//   }
// }
