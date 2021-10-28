import { Component } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';
import { map, take, takeWhile } from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dataBinding';
  currentDate = new Date();
  user = {
    name: 'phu',
    age: 24,
  };

  time = 0;

  interval$ = interval(1000);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.interval$.subscribe(val => {
      this.time = val;
    });
  }

  counter$: Observable<number>;
  count = 6;

  constructor() {
    this.counter$ = timer(0,1000).pipe(
      take(this.count),
      map(() => --this.count)
    );
  }

  address = {
    city: 'Hue',
    state: 'State',
    zip: 121212,
    country: 'USA',
  };

  users = [
    {
      name: 'Tiep Phan',
      age: 30,
    },
    {
      name: 'Trung Vo',
      age: 28,
    },
    {
      name: 'Chau Tran',
      age: 29,
    },
    {
      name: 'Tuan Anh',
      age: 16,
    },
  ];

  // có thêm pure ở Pipe
  // onAddUser() {
  //   console.log('phus')
  //   this.users.push({
  //     name: 'phu',
  //     age: 24,
  //   });
  // }

  // ko có thêm pure : false
  onAddUser() {
    this.users = [...this.users , {name : 'phu' , age : 24}]
  }
}
