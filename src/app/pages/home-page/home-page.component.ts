import { HomePageService } from './../services/home-page.service';
import { Component } from '@angular/core';

import { News } from './../models/home-page';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  news: News[] = [];
  displayedColumns = ['headline', 'tags'];

  //homepageService: HomePageService;

  constructor(private homepageService: HomePageService) {
    //this.homepageService = new HomePageService();
    this.news = this.homepageService.list();
  }
}
