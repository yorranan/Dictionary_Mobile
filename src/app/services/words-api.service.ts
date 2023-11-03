import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsAPIService {
  private options = {
    headers: {
      'X-RapidAPI-Key': environment.apiKey,
      'X-RapidAPI-Host': environment.apiHost,
    },
    returnType: 'json',
  };

  constructor(private http: HttpClient) { }

  getWord(word: string) {
    return this.http.get(
      `https://${environment.apiHost}/words/${word}`,
      this.options
    );
  }
}
