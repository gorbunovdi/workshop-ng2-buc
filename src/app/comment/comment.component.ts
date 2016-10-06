import { Component, OnInit } from '@angular/core';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'comments',
  template: require('./comment.component.html')
})
export class CommentComponent implements OnInit {
  private newComment: Comment;

  constructor(
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.resetNewComment();
  }

  get comments(): Comment[] {
    return this.commentService.getComments();
  }

  private sendComment(): void {
    this.commentService.addComment(this.newComment);
    this.resetNewComment();
  }

  private resetNewComment(): void {
    this.newComment = this.commentService.createEmptyComment();
  }
}

