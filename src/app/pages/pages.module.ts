import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppMaterialModule
  ]
})
export class PagesModule { }
