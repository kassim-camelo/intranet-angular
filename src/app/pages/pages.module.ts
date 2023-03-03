import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class PagesModule { }
