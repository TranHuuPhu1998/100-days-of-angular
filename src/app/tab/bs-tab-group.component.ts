import {
  Component,
  forwardRef,
} from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

const BsTabGroupProvider = {
  provide: TabGroupComponent,
  useExisting: forwardRef(() => BsTabGroupComponent),
};

@Component({
  selector: 'app-bs-tab-group',
  template: `
    <ul class="nav nav-tabs" role="tablist">
      <li
        class="nav-item"
        role="presentation"
        *ngFor="let tab of tabPanelList; index as idx"
        (click)="selectItem(idx)"
      >
        <a
          class="nav-link"
          [class.active]="idx === activeIndex"
          role="tab"
          aria-selected="true"
          >{{ tab.title }}</a
        >
        <button (click)="removeTabPanel(tab)">
        remove
      </button>
      </li>
    </ul>

    <div class="tab-content">
      <ng-container *ngFor="let tab of tabPanelList; index as idx">
        <div
          class="tab-pane active"
          role="tabpanel"
          *ngIf="idx === activeIndex"
        >
          <ng-container *ngTemplateOutlet="tab.panelBody"></ng-container>
        </div>
      </ng-container>
    </div>
  `,
  providers: [BsTabGroupProvider],
})
export class BsTabGroupComponent extends TabGroupComponent {}
