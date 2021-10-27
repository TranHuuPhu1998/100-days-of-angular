import { state, trigger , style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit, Output , EventEmitter, ViewChildren } from '@angular/core';
import { Todo } from 'src/app/modals/todo.modal';

const fadeStrikeThrough = trigger('fadeStrikeThrough',[
  state('active' , style({
    fontSize: '18px',
    color: 'black'
  })),
  state('completed',style({
    fontSize: '17px',
    color: '#d9d9d9',
    textDecoration : 'line-through'
  })),
  transition('active <=> completed',[animate(250)])
]);

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  animations: [
    fadeStrikeThrough
  ]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() changeStatus : EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<string> = new EventEmitter<string>();

  @ViewChildren('input') vc: { first: { nativeElement: { focus: () => void; }; }; };

  isHovered = false;
  isEditing = false;

  constructor() { }

  ngOnInit(){}

  onShowEditForm(){
    this.isEditing = true;
    this.vc.first.nativeElement.focus();
  }

  handleChangeTodoStatus(){
    this.changeStatus.emit({...this.todo , isCompleted : !this.todo.isCompleted})
  }

  submitEdit(event: KeyboardEvent){
    const {keyCode} = event;
    event.preventDefault()
    if(keyCode === 13){
      this.editTodo.emit(this.todo);
      this.isEditing = false;
    }
  }

  onDeleteTodo(){
    this.deleteTodo.emit(this.todo.id)
  }
}
