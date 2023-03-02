import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { News } from '../models/home-page';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(public httpClient: HttpClient) { }

  list(): News[] {
    return [
      { _id: '001', headline: 'Prevenção ao coronga', tags: 'pandemia'}
    ];
  }
}
