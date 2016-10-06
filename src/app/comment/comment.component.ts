import { Component } from '@angular/core';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'comments',
  template: require('./comment.component.html')
})
export class CommentComponent {

  constructor(
    private commentService: CommentService
  ) {}

  get comments(): Comment[] {
    return this.commentService.getComments();
  }
}
