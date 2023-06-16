import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

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
// export class TotalUsersComponent {
//   https://jsonplaceholder.typicode.com/users
// }


export class TotalUsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender', 'email', 'status', 'action'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit() {
    // Dummy data for demonstration
    const users: User[] = [
      { name: 'John Doe', gender: 'Male', email: 'john.doe@example.com', status: 'Active' },
      { name: 'Jane Smith', gender: 'Female', email: 'jane.smith@example.com', status: 'Inactive' },
      // Add more users as needed
    ];

    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
