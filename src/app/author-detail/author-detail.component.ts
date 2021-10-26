import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../author.modal';

@Component({
  selector: 'app-author-detail',
  template: `
  <div *ngIf="author">
  <strong>{{author.firstName}} {{author.lastName}}</strong>
  <button (click)="handleDelete()">x</button>
  </div>`,
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author | undefined;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() {}
  ngOnInit(): void {}

  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
