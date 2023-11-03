import { TestBed } from '@angular/core/testing';

import { WordsAPIService } from './words-api.service';

describe('WordsAPIService', () => {
  let service: WordsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
