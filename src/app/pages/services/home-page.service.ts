import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { News } from '../models/home-page';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  private readonly API = '/assets/anews.json';

  constructor(public httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<News[]>(this.API)
    .pipe(
      first(),
      delay(500),
      tap(news => console.log(news))
    );
  }
}
