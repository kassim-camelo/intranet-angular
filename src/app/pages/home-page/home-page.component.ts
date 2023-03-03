import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { HomePageService } from './../services/home-page.service';
import { Component } from '@angular/core';

import { News } from './../models/home-page';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  news$: Observable<News[]>;
  displayedColumns = ['headline', 'tags'];

  //homepageService: HomePageService;

  constructor(
    private homepageService: HomePageService,
    public dialog: MatDialog) {
    //this.homepageService = new HomePageService();
    this.news$ = this.homepageService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar notícias.')
        return of([])
      })
    );
  }

  onError (errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
