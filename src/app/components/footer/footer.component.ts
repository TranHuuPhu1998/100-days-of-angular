import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Filter, FilterButton } from 'src/app/modals/filtering.modal';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  filterButtons: FilterButton[] = [
    { type: Filter.All, label: 'All', isActive: true },
    { type: Filter.Active, label: 'Active', isActive: false },
    { type: Filter.Completed, label: 'Completed', isActive: false },
  ];
  length = 0;
  hasCompleted$: Observable<boolean>;
  // hủy đăng ký Observable
  destroy$: Subject<null> = new Subject<null>();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // hủy đăng ký Observable
    // const subscription = someObservable.subscribe(...);
    // subscription.unsubscribe();

    this.hasCompleted$ = this.todoService.todos$.pipe(
      map((todos) => todos.some((t) => t.isCompleted)),
      // unsubscribe sẽ ngưng lấy giá trị từ todoService khi destroy
      takeUntil(this.destroy$)
    );

    this.todoService.length$
      .pipe(takeUntil(this.destroy$))
      .subscribe((length) => {
        this.length = length;
      });
  }

  filterTodo(type : Filter){
    this.setActiveFilterBtn(type);
    this.todoService.filterTodos(type);
  };

  private setActiveFilterBtn(type: Filter){
    this.filterButtons.map((btn) => {
      btn.isActive = btn.type === type
    })
  }

  onClearCompleted() {
    this.todoService.clearCompleted();
  }

  ngOnDestroy() {
    // when component remote khỏi dome
    this.destroy$.next();
    this.destroy$.complete();
  }


}
