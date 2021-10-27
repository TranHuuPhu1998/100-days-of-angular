import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

@Component({
  selector: 'app-tab-panel',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class TabPanelComponent implements OnInit {
  @Input() title: string;
  @ViewChild(TemplateRef , {static: true}) panelBody : TemplateRef<unknown>

  constructor(private tabGround : TabGroupComponent) { }

  ngOnInit(): void {
    this.tabGround.addTabPanel(this)
  }

}
