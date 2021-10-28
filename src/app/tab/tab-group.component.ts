
import { Component, Input, OnInit, Output , EventEmitter, ContentChild, QueryList } from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';
@Component({
  selector: 'app-tab-group',
  template: `
    <div class="tab-header">
      <div
        class="tab-item-header"
        *ngFor="let tab of tabPanelList;let idx = index"
        (click)="selectItem(idx)"
        [class.active]="idx === activeIndex"
      >
        {{ tab.title }}
        <button (click)="removeTabPanel(tab)">
          remove
        </button>
      </div>
    </div>

    <div class="tab-body">
        <ng-container *ngFor="let tab of tabPanelList;let idx = index">
        <div *ngIf="idx === activeIndex">
          <ng-container *ngTemplateOutlet="tab.implicitBody"></ng-container>
        </div>
      </ng-container>
    </div>

  `,
  styles : [`
    .tab-header{
      display:flex;
      border:1px solid #cccccc;
      padding:10px;
    }
    .tab-item-header .active {
      background-color:blue;
    }
    .tab-item-header {
      border:1px solid #cccccc;
      margin-right:10px;
    }
  `]
})
export class TabGroupComponent implements OnInit {
  tabPanelList: TabPanelComponent[] = [];

  @ContentChild(TabPanelComponent) tabPanels: QueryList<TabPanelComponent>;

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.tabPanels);
    // theo giỏi sự thây đổi của tabPanels or QueryList tabPanels
    // content được mất đi thêm vào
    this.tabPanels.changes.subscribe(console.log)
  }

  @Input() activeIndex = 0;
  @Output() tabActiveChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {
    console.log('tabPanelList',this.tabPanelList)
  }

  selectItem(idx: number) {
    this.activeIndex = idx;
    this.tabActiveChange.emit(idx)
  }

  addTabPanel(tab: TabPanelComponent) {
    this.tabPanelList = [...this.tabPanelList,tab];
  }

  removeTabPanel(tab: TabPanelComponent) {
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((item, idx) => {
      if (tab === item) {
        found = idx;
        return false;
      }
      return true;
    });

    if(found === this.activeIndex){
      this.tabActiveChange.emit(found === this.tabPanelList.length ? found - 1 : found);
    }
  }
}
