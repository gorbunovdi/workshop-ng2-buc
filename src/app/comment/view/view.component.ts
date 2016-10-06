import { Component, Input } from '@angular/core';
import { Comment } from '../comment.model';

@Component({
  selector: 'comment-view',
  template: require('./view.component.html')
})
export class CommentViewComponent {
  @Input() comment;
}
