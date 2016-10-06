import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommentComponent } from './comment.component';
import { CommentService } from './comment.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CommentComponent
  ],
  providers: [
    CommentService
  ],
  exports: [
    CommentComponent
  ]
})
export class CommentModule {}
