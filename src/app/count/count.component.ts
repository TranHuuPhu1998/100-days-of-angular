import { Component } from '@angular/core';
let _count = 1;
@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})

export class CountComponent  {
  count = _count++;
}
