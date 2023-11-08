import { Component, OnInit } from '@angular/core';
import { WordsAPIService } from '../services/words-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-word',
  templateUrl: './view-word.page.html',
  styleUrls: ['./view-word.page.scss'],
})
export class ViewWordPage implements OnInit {
  wordDetails: any;

  constructor(private api: WordsAPIService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const word = history.state.word;
    this.searchWord(word);  
  }

  async searchWord(word: string) { 
    try {
      this.wordDetails = await this.api.getWord(word).toPromise();
    } catch (error) {
      console.log(error);
    }
    console.log(this.wordDetails.results);
  }
}
