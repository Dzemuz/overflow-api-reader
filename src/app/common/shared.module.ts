import { NgModule } from '@angular/core';
import { sanitizeHtmlPipe } from './sanitize-html.pipe';

@NgModule({
  declarations: [
    sanitizeHtmlPipe
  ],
  exports: [
    sanitizeHtmlPipe
  ]
})
export class SharedModule { }