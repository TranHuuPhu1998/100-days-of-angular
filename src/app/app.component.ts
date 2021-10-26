import {
  Component, SimpleChanges,
} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = 'dataBinding';
  title = 'hello';
  message = '';
  name= '';
  code= 0;
  count = 5;

  constructor() {
    console.log(`new - data is ${this.data}`);
  }

  ngOnInit() {
    // run when component initialized first
    // run trong lần đầu tiên khởi tạo component
    console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    // run when component parent send data to component children
    console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngDoCheck() {
    // run when khi có sự thay đổi dữ liệu trong component
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
