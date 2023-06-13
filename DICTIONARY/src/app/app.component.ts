import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SearchResult {
  word: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
    }[];
  }[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchResult: SearchResult[] = [];

  constructor(private http: HttpClient) {}

  onSearch(searchValue: string) {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;
    console.log(searchValue)
    this.http.get<SearchResult[]>(apiUrl).subscribe((response: SearchResult[]) => {
      this.searchResult = response;
    });
  }
}
