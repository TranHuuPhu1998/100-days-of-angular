import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabContentDirective } from './tab-content.derective';
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
  @ViewChild(TemplateRef , {static: true}) implicitBody : TemplateRef<unknown>
  // case chi có 1 ng-template
  // @ContentChild(TemplateRef , {static : true}) explicitBody : TemplateRef<unknown>

  // case có nhiều ng-template
  @ContentChild(TabContentDirective , {static : true , read : TemplateRef}) explicitBody : TemplateRef<unknown>

  constructor(private tabGround : TabGroupComponent) { }

  get panelBody() : TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody
  }

  ngOnInit(): void {
    console.log('this', this)
    this.tabGround.addTabPanel(this)
  }

  ngOnDestroy(): void {
    this.tabGround.removeTabPanel(this);
  }

}
