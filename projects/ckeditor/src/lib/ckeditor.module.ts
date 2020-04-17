import { NgModule } from '@angular/core';
import { Ckeditor5ToolbarComponent } from './components/ckeditor5-toolbar.component';
import { Ckeditor5Component } from './components/ckeditor5.component';


@NgModule({
  declarations: [
    Ckeditor5ToolbarComponent,
    Ckeditor5Component
  ],
  exports: [
    Ckeditor5ToolbarComponent,
    Ckeditor5Component
  ]
})
export class CkeditorModule { }
