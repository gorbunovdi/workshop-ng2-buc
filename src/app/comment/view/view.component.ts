import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment.model';

@Component({
  selector: 'comment-view',
  styles: [require('./view.component.css')],
  template: require('./view.component.html')
})
export class CommentViewComponent {
  @Input() comment;
  @Output() onUpvote: EventEmitter<Comment> = new EventEmitter();

  private upvote() {
    this.onUpvote.emit(this.comment);
  }
}
