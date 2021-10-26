import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `<header>
      <ng-content select=".toogle-header"></ng-content>
    </header>
    <div
      class="toggle-wrapper"
      [class.checked]="checked"
      tabindex="0"
      (click)="toggle()"
    >
      <div class="toggle"></div>
    </div>
    <div class="toogle-label">
      <ng-content select="app-label"></ng-content>
    </div>

    <div class="toggle-content">
      <ng-content></ng-content>
    </div>`,
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
