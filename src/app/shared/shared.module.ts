import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    ErrorDialogComponent,
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    AppMaterialModule
  ]
})
export class SharedModule { }
