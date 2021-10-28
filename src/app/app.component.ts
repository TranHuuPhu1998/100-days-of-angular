import { Component } from '@angular/core';
import { asyncScheduler, from, fromEvent, interval, of, timer } from 'rxjs';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';
import { auditTime, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, find, first, last, pluck, single, skip, skipUntil, skipWhile, take, takeLast, takeUntil, takeWhile, throttleTime } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataBinding';


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const queryInput:any = document.querySelector('#input')
    fromEvent(queryInput, 'keydown').pipe(
      debounceTime(1000),
      pluck('target','value')
    ).subscribe(observer);
  }
}

const observer = {
  next: (val:any) => console.log(val),
  error: (err:any) => console.log(err),
  complete: () => console.log('complete'),
};

// filter()

// from([1, 2, 3, 4, 5, 6])
//   .pipe(
//     filter((x) => x % 2 === 0) // số chẵn
//   )
//   .subscribe(console.log); // output: 2, 4, 6


// from([1, 2, 3, 4, 5, 6])
//   .pipe(first())
//   .subscribe(console.log, null, () => console.log('complete')); // output: 1 -> complete

// of() // an empty Observable
//   .pipe(first())
//   .subscribe(observer); // Error: EmptyError

// from([1, 2, 3, 4, 5, 6])
//   .pipe(first((x) => x > 3))
//   .subscribe(observer); // output: 4 -> complete

// from([1, 2, 3, 4, 5, 6])
//   .pipe(first((x) => x > 6)) // without default value
//   .subscribe(observer); // Error: Error

// from([1, 2, 3, 4, 5, 6])
//   .pipe(
//     first((x) => x > 6),
//     'defaultValue'
//   ) // with default value
//   .subscribe(observer); // output: 'defaultValue' -> complete

// last()
// from([1, 2, 3, 4, 5, 6])
//   .pipe(last())
//   .subscribe(observer); // output: 6 -> complete

// of() // an empty Observable
//   .pipe(last())
//   .subscribe(observer); // Error: EmptyError

// find
// from([1, 2, 3, 4, 5, 6])
//   .pipe(
//     find((x) => x % 2 === 0) // số chẵn
//   )
//   .subscribe(observer); // output: 2 -> complete

// single
// from([1, 2, 3]).pipe(single()).subscribe(observer); // error: Error -> nhiều hơn 1 giá trị được emit từ from() và single() không có điều kiện gì.

// from([1, 2, 3])
//   .pipe(single((x) => x === 2))
//   .subscribe(observer); // output: 2 -> complete

// from([1, 2, 3])
//   .pipe(single((x) => x > 1))
//   .subscribe(observer); // error: Error -> có nhiều hơn 1 giá trị > 1.


// take
// from([1, 2, 3, 4])
//   .pipe(take(2))
//   .subscribe(observer); // output: 1, 2 -> complete

// takeLast
// from([1, 2, 3, 4])
//   .pipe(takeLast(2))
//   .subscribe(observer); // output: 3, 4 -> complete

// interval(1000).pipe(
//   take(4),
//   takeLast(1)
// ).subscribe(observer);

// takeUntil
// stop destroy event //  unsubscribe
// interval(1000)
//   .pipe(takeUntil(fromEvent(document, 'click')))
//   .subscribe(observer); // output: 0, 1, 2, 3, 4 -- click --> 'complete'


// takeWhile()
// interval(1000)
//   .pipe(takeWhile((x) => x < 6))
//   .subscribe(observer); // output: 0, 1, 2, 3, 4, 5 --> complete


// skip
// interval(1000)
//   .pipe(skip(3))
//   .subscribe(observer); // output: 2, 3, 4 --> complete

// interval(1000)
//   .pipe(skipUntil(timer(5000)))
//   .subscribe(observer);

// interval(1000)
// .pipe(skipWhile(x => x < 6))
// .subscribe(observer);

// from([1, 2, 3, 4, 5, 5, 4, 3, 6, 1])
//   .pipe(distinct())
//   .subscribe(observer);

// from([1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4])
//   .pipe(distinctUntilChanged())
//   .subscribe(observer);

// of(
//   { age: 4, name: 'Foo' },
//   { age: 6, name: 'Foo' },
//   { age: 7, name: 'Bar' },
//   { age: 5, name: 'Foo' }
// )
// .pipe(distinctUntilKeyChanged('name'))
// .subscribe(observer) // output: { age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' } -> complete


// audit Time
// fromEvent(document , 'click').pipe(
//   auditTime(1500)
// ).subscribe(observer)

// throttleTime

// fromEvent(document, 'mousemove')
//   .pipe(throttleTime(1000 , asyncScheduler , {trailing : true , leading : false}))
//   .subscribe(observer);


// debounce

