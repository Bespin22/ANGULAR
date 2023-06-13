import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchResult: any;

  constructor(private http: HttpClient) {}

  onSearch(searchValue: string) {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;
    console.log(apiUrl)

    this.http.get(apiUrl).subscribe((response: any) => {
      this.searchResult = response;
      console.log(searchValue)
    });
  }
}