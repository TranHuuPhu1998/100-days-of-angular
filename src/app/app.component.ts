import { Component } from '@angular/core';
import { BehaviorSubject, from, fromEvent, interval, merge, of } from 'rxjs';
import { buffer, bufferTime, delay, map, mapTo, pluck, reduce, scan, toArray } from 'rxjs/operators'
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

const users = [
  {id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662', username: 'tiepphan', firstname: 'tiep', lastname: 'phan' , age:12},
  {id: '34784716-019b-4868-86cd-02287e49c2d3', username: 'nartc', firstname: 'chau', lastname: 'tran',age:22},
];

// const usersVm = users.map(user => {
//   return {
//     ...user,
//     fullname: `${user.firstname} ${user.lastname}`
//   }
// });

// map of

// of(users).pipe(
//   map(data => {
//     console.log("inside map:" ,data)
//     return data;
//   })
// ).subscribe(observer)

// map from

// from(users).pipe(
//   map(data => {
//     console.log("inside map:" ,data)
//     return data;
//   })
// ).subscribe(observer)


// map merge

// merge(
//   of(users[0]).pipe(delay(2000)), // 2s tiep phan
//   of(users[1]).pipe(delay(4000)) // 4s chau chau
// ).pipe(
//   map(user => ({...user, fullname:`${user.firstname} ${user.lastname}`}))
// ).subscribe(observer)

// pluck
// Đối với yêu cầu map ra một property trong một object như vừa rồi, bạn có thể sử dụng một cách khác là pluck:

// const params$ = of({id : 123 , foo: {bar: 'Phu Tran'}})

// const id$ = params$.pipe(
//   pluck('foo','bar')
// ).subscribe(observer);

// mapTo
// return value fixed
// const mouseover$ = fromEvent(document, 'mouseover');
// const mouseleave$ = fromEvent(document, 'mouseleave');

// const hover$ = merge(
//   mouseover$.pipe(
//     mapTo(true),
//   ),
//   mouseleave$.pipe(
//     mapTo(false),
//   )
// );
// hover$.subscribe(observer);

// reduce
// interval ko complete => merge complete thì pipe mới ko run
// const totalAge$ = merge(
//   of(users[0]).pipe(delay(2000)), // 2s tiep phan
//   of(users[1]).pipe(delay(4000)), // 4s chau chau
//   interval(1000).pipe(mapTo({age:1}))
// ).pipe(
//   reduce((acc,current) => acc + current.age,0)
// ).subscribe(observer)

// toArray
// const totalAge$ = merge(
//   of(users[0]).pipe(delay(2000)), // 2s tiep phan
//   of(users[1]).pipe(delay(3000)), // 4s chau chau
// ).pipe(
//   toArray()
// ).subscribe(observer)

// buffer

const $source = interval(1000);
const click$ = fromEvent(document , 'click');

// $source.pipe(
//   buffer(click$)
// ).subscribe(observer)

// bufferTime

// $source.pipe(
//   bufferTime(2000)
// ).subscribe(observer)

// scan

// const totalAge$ = merge(
//   of(users[0]).pipe(delay(2000)), // 2s tiep phan
//   of(users[1]).pipe(delay(4000)), // 4s chau chau
//   interval(1000).pipe(mapTo({age:1}))
// ).pipe(
//   scan((acc,current) => acc + current.age,0)
// ).subscribe(observer)

// cập nhật state

const initialState = {};
const stateSubject = new BehaviorSubject(initialState);

const state$ = stateSubject.
    asObservable().pipe(
      scan((state , partialState) => ({...state, ...partialState}),{})
    )

state$.subscribe(observer);

stateSubject.next({name : 'Chau'})
stateSubject.next({age : 29})
