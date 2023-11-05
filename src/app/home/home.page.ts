import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  word!: string;
  constructor(private router: Router) {}

  getWord(word: string) {
    this.router.navigate(['/view-word'], {state: {word}});
  }

}
