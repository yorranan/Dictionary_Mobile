import { Component, OnInit } from '@angular/core';
import { WordsAPIService } from '../services/words-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-word',
  templateUrl: './view-word.page.html',
  styleUrls: ['./view-word.page.scss'],
})
export class ViewWordPage implements OnInit {
  

  constructor(private api: WordsAPIService, private route: ActivatedRoute) { }

  ngOnInit() {
    const word = history.state.word;
    this.searchWord(word);  
  }

  searchWord(word: string) { 
    this.api.getWord(word).subscribe(res => {
      console.log(res);
    });
  }

}
