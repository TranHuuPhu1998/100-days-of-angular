import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-clild',
  templateUrl: './clild.component.html',
  styleUrls: ['./clild.component.css']
})
export class ClildComponent implements OnInit {

  // OnChanges ,
    @Input()
    countChild: any;

    constructor() {
      console.log('Constructor: Child-component');
    }

    ngOnInit(): void {
      console.log('OnInit: Child-Component');
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //   console.log('OnChange: ' + JSON.stringify(changes));
    // }

    increment() {
      this.countChild++;
    }

    ngDoCheck(): void {
      console.log('DoCheck: ' + this.countChild);
    }
}
