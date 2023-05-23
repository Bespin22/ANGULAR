import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string): boolean {
    // Perform the login logic here
    // Return true if login is successful, otherwise false
    return true;
  }

  register(username: string, email: string, password: string): boolean {
    // Perform the registration logic here
    // Return true if registration is successful, otherwise false
    return true;
  }
}
