import { Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'dataBinding';
}

// fromEvent(document, 'mousemove')
//   .pipe(
//     throttleTime(1000),
//     map((ev:any) => ev.clientX + " , " + ev.clientY)
//   )
//   .subscribe(console.log);

// const observable = new Observable(function subscribe(observer) {
//     const id = setTimeout(() => {
//       observer.next('Hello Rxjs');
//       observer.complete();
//     }, 1000);
//     return function unsubscribe() {
//       clearTimeout(id);
//     }
// });

// observable.subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   error: (error) => {
//     console.log(error);
//   },
//   complete: () => {
//     console.log('Done');
//   }
// });

const observable = new Observable(function subscribe(observer) {
    const id = setInterval(() => {
      observer.next('Hello Rxjs');
      // observer.complete();
    }, 1000);
    return function unsubscribe() {
      // observer.complete();
      clearInterval(id);
    }
});

const subscription = observable.subscribe({
  next: (value:any) => {
    console.log(value);
  },
  error: (error:any) => {
    console.log(error);
  },
  complete: () => {
    console.log('Done');
  }
});

//sao 3 giây unsubscribe

setTimeout(() => {
  subscription.unsubscribe();
}, 3000)

