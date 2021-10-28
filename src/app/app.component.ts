import { Component } from '@angular/core';
import { combineLatest, concat, forkJoin, fromEvent, interval, merge, of, race, zip } from 'rxjs';
import { delay, map, mapTo, take, withLatestFrom } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dataBinding';
}

const observer = {
  next: (val: any) => console.log(val),
  error: (err: any) => console.log(err),
  complete: () => console.log('complete'),
};

// forkJoin([
//   of('Hello').pipe(delay(1000)),
//   of("!!!").pipe(delay(3000)),
//   of("Word").pipe(delay(2000))
// ]).subscribe(
//   observer
// );

// forkJoin([
//   of('Hello').pipe(delay(1000)),
//   of("!!!").pipe(delay(3000)),
//   interval(1000).pipe(take(2))
// ]).pipe(
//   map(([hello,word,timer]) => ({hello, word , timer}))
// ).subscribe(observer)

// combineLatest([
//   interval(2000).pipe(map((x) => `First: ${x}`)), // {1}
//   interval(1000).pipe(map((x) => `Second: ${x}`)), // {2}
//   interval(3000).pipe(map((x) => `Third: ${x}`)), // {3}
// ]).subscribe(observer);


// zip(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(observer);


const age$ = of<number>(29, 28, 30);
const name$ = of<string>('Chau', 'Trung', 'Tiep');
const isAdmin$ = of<boolean>(true, false, true);

// zip(age$, name$, isAdmin$).pipe(
//   map(([age, name, isAdmin]) => ({ age, name, isAdmin }))
// ).subscribe(observer);

zip(fromEvent(document , 'mousedown'),fromEvent(document , 'mouseup'))

// zip(age$, name$, isAdmin$, (age, name, isAdmin) => ({
//   age,
//   name,
//   isAdmin,
// })).subscribe(observer);
// output:
// { age: 29, name: 'Chau', isAdmin: true }
// { age: 28, name: 'Trung', isAdmin: false }
// { age: 30, name: 'Tiep', isAdmin: true }

// chạy them thứ tự
// concat(of(4, 5, 6).pipe(delay(1000)), of(1, 2, 3)).subscribe(observer);

// thằng nào emit trước chạy trước
// merge(of(4, 5, 6).pipe(delay(1000)), of(1, 2, 3)).subscribe(observer);

// race lấy thằng nào chạy nhanh nhất
// race(
//   interval(1000).pipe(mapTo('fast')),
//   interval(2000).pipe(mapTo('medium')),
//   interval(3000).pipe(mapTo('slow'))
// ).subscribe(observer);

const withLatesFrom$ = interval(2000).pipe(map(x => `Need value : ${x}`))

fromEvent(document, 'click')
  .pipe(withLatestFrom(withLatesFrom$))
  .subscribe(observer);
