import { Component } from '@angular/core';
import { WordsAPIService } from '../services/words-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private api: WordsAPIService) {}

  getWord(word: string) {
    this.api.getWord(word).subscribe(result => console.log(result));
  }

}
