import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchValue!: string;
  searchResult!: any[];

  constructor(private http: HttpClient) {}

  onSearch(searchValue: string) {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;
  
    this.http.get<any[]>(apiUrl).subscribe((response: any[]) => {
      this.searchResult = response;
    });
  }
}