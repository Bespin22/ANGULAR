// total-users.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../services/user.service';

interface User {
  name: string;
  gender: string;
  email: string;
  status: string;
}

@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.css']
})

export class TotalUsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender', 'email', 'status', 'action'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.dataSource = new MatTableDataSource<User>(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editUser(user: User) {
    // Handle edit operation
  }

  deleteUser(user: User) {
    // Handle delete operation
  }
}
