import { Component } from "@angular/core";

@Component({
  selector: "app-hello",
  template: `
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
    <button (click)="showInfo()">Click me!</button>
    <input type="text" [ngModel]="user.name" (ngModelChange)="user.name = $event" />
  `,
})
export class HelloComponent {
  showInfo() {
    alert("Inside Angular Component method");
  }
  user = {
    name: "Phu Tran",
    age: 24,
  };
}
