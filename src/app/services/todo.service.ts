import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filter } from '../modals/filtering.modal';
import { Todo } from '../modals/todo.modal';
import { LocalStorageService } from './local-storage.service';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private static readonly TodoStorageKey = 'todos';

  private todos: Todo[];
  private filteredTodos: Todo[];
  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private displayTodosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private currentFilter: Filter = Filter.All;

  private updateTodosData(){
    // next same as gán dữ liệu mới cho subject
    // vd: this.displayTodosSubject = this.filteredTodos
    this.displayTodosSubject.next(this.filteredTodos);
    this.lengthSubject.next(this.todos.length)
  }

  todos$ : Observable<Todo[]> = this.displayTodosSubject.asObservable();
  length$ : Observable<number> = this.lengthSubject.asObservable();

  constructor(private storageService: LocalStorageService) { };

  fetchFromLocalStorage() {
    this.todos = this.storageService.getValue<Todo[]>(TodoService.TodoStorageKey) || [];
    // deep clone <=>  tức là tạo mới một biến có cùng giá trị và được cắt đứt quan hệ hoàn toàn với biến được copy
    // this.filteredTodos = [...this.todos.map(todo => ({...todo}))];
    // shallow clone <=> biến mới hoặc các thành phần của biến mới vẫn còn quan hệ dây mơ rễ má với biến ban đầu,
    this.filteredTodos = [...this.todos];
    this.updateTodosData()
  }

  updateToLocalStorage(){
    this.storageService.setObject(TodoService.TodoStorageKey,this.todos);
    this.filterTodos(this.currentFilter , false);
    this.updateTodosData()
  }

  addTodo(content : string) {
    const id = uuid.v4();
    const newTodo = new Todo(id,content);
    this.todos.unshift(newTodo);
    this.updateToLocalStorage()
  }

  changeTodoStatus(id : string , isComplete: boolean){
    const index = this.todos.findIndex(t => t.id === id);
    const todo = this.todos[index];
    todo.isCompleted = isComplete;
    this.todos.splice(index ,1, todo);
    this.updateToLocalStorage();
  }

  editTodo(id : string , content : string) {
    const index = this.todos.findIndex(t => t.id === id);
    const todo = this.todos[index];
    todo.content = content;
    this.todos.splice(index,1,todo);
    this.updateToLocalStorage();
  }

  deleteTodo(id : string){
    const index = this.todos.findIndex(t => t.id === id);
    this.todos.splice(index,1);
    this.updateToLocalStorage();
  }

  toggleAll(){
    this.todos = this.todos.map((todo => {
      return {
        ...todo,
        isCompleted : !this.todos.every(t => t.isCompleted)
      }
    }))
    this.updateToLocalStorage();
  }

  clearCompleted(){
    this.todos = this.todos.filter(todo => todo.isCompleted === false);
    this.updateToLocalStorage();
  }

  filterTodos(filter: Filter , isFiltering: boolean = true){
    this.currentFilter = filter;
    switch(filter) {
      case Filter.Active:
        this.filteredTodos = this.todos.filter(todo => !todo.isCompleted);
        break;
      case Filter.Completed:
        this.filteredTodos = this.todos.filter(todo => todo.isCompleted);
        break;
      case Filter.All:
        this.filteredTodos = [...this.todos];
        break;
    }
    if(isFiltering) {
      this.updateTodosData();
    }
  }
}
