import { Component } from "@angular/core";

@Component({
  selector: "app-hello",
  template: `
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
    <div *ngIf="user.age >= 13">
      Bạn có thể xem nội dung PG-13
    </div>
    <div *ngIf="user.age < 13">
      Bạn không thể xem nội dung PG-13
    </div>
    <hr/>
    <div *ngIf="user.age >= 13; else noPG13">
      Bạn có thể xem nội dung PG-13
    </div>
    <ng-template #noPG13>
      <div>
      ng-template Bạn không thể xem nội dung PG-13
      </div>
    </ng-template>
    <hr/>
    <ng-template [ngIf]="user.age >= 13" [ngIfElse]="noPG13">
      <div>
        Bạn có thể xem nội dung PG-13
      </div>
    </ng-template>
  `,
})
export class HelloComponent {
  showInfo() {
    alert("Inside Angular Component method");
  }
  user = {
    name: "Phu Tran",
    age: 12,
  };
}
