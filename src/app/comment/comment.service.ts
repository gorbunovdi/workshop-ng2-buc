import { Injectable } from '@angular/core';
import { Comment } from './comment.model';

@Injectable()
export class CommentService {
	private comments: Comment[] = [];

  public getComments(): Array<Comment> {
    return this.comments;
  }

  public addComment(comment: Comment): void {
    this.comments.unshift(comment);
  }

  public createEmptyComment(): Comment {
    return {text: '', votes: 0};
  }
}
