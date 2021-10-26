import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor: string = '#9e9e9e';
  @Input() progressColor: string = '#2e8b57';
  @Input() progress = 40;
  constructor() {}
  ngOnInit() {}

  // ngOnChanges(changes: SimpleChanges) {
  //   if ("progress" in changes) {
  //     if (typeof changes["progress"].currentValue !== "number") {
  //       const progress = Number(changes["progress"].currentValue);
  //       if (Number.isNaN(progress)) {
  //         this.progress = 0;
  //       } else {
  //         this.progress = progress;
  //       }
  //     }
  //   }
  // }
}
