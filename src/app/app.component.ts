import { Component } from '@angular/core';
import { defer, from, fromEvent, fromEventPattern, interval, of, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dataBinding';
}

const observer = {
  next: (val:any) => console.log(val),
  error: (err:any) => console.log(err),
  complete: () => console.log('complete'),
};

// of() là operator dùng để tạo 1 Observable từ bất cứ giá trị gì: primitives, Array, Object, Function v.v...
// of() sẽ nhận vào các giá trị và sẽ complete ngay sau khi tất cả các giá trị truyền vào được emit.

// of('hello').subscribe(observer)

// form
// from() cũng gần giống với of(), cũng được sử dụng để tạo Observable từ 1 giá trị.
// Tuy nhiên, điểm khác biệt đối với of() là from() chỉ nhận vào giá trị là một Iterable hoặc là một Promise.
// of('hello').subscribe(observer)

// from(Promise.resolve('Hello Word')).subscribe(observer);
// from(['1','2','3']).subscribe(observer);

// fromEvent

// output (example): MouseEvent {...}
// complete: không có gì log.
// fromEvent(document, 'click').subscribe(observer);

// fromEventPattern
// fromEventPattern(
//   (handler) => {
//     document.addEventListener('click', handler);
//   },
//   (handler) => {
//     document.removeEventListener('click', handler);
//   }
// ).subscribe(observer);

// interval
// interval(1000).subscribe(observer)


// timer
// timer(1000).subscribe(observer) // setTimeout
// sao 1 giây sẻ như timer(1000).subscribe(observer) và ko có complete
// timer(1000,1000).subscribe(observer) // setTimeout

// throwError

// throwError('error').subscribe(observer)

// defer

// const now$ = of(Math.random());
// // output: 0.4146530439875191
// now$.subscribe(observer);
// // output: 0.4146530439875191
// now$.subscribe(observer);
// // output: 0.4146530439875191
// now$.subscribe(observer);

// Các bạn có thể thấy of() sẽ trả về cùng giá trị Math.random() cho cả 3. Bây giờ chúng ta thử đổi sang defer() nhé.

const now$ = defer(() => of(Math.random()));
// output: 0.27312186273281935
now$.subscribe(observer);
// output: 0.7180321390218474
now$.subscribe(observer);
// output: 0.9626312890837065
now$.subscribe(observer);
