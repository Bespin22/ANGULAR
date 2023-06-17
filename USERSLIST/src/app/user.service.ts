import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', gender: 'Male', email: 'john.doe@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', gender: 'Female', email: 'jane.smith@example.com', status: 'Inactive' },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User): Observable<any> {
    const id = Math.max(...this.users.map(u => u.id)) + 1;
    user.id = id;

    this.users.push(user);
    return of({ success: true });
  }

  editUser(user: User): Observable<any> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      return of({ success: true });
    } else {
      return of({ success: false, message: 'User not found.' });
    }
  }

  deleteUser(id: number): Observable<any> {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return of({ success: true });
    } else {
      return of({ success: false, message: 'User not found.' });
    }
  }
}
