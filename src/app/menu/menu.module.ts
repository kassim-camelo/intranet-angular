import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './options/options.component';



@NgModule({
  declarations: [
    OptionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    OptionsComponent
  ]
})
export class MenuModule { }
