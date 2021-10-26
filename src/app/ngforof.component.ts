import { Component } from '@angular/core';

@Component({
  selector: 'ng-for-of',
  template: `
    <div *ngFor="let author of authors">
      {{ author.id }} - {{ author.firstName }} {{ author.lastName }}
    </div>
    <hr />
    <div *ngFor="let author of authors; index as idx; count as total">
      ({{ idx }})/({{ total }}): {{ author.id }} - {{ author.firstName }}
      {{ author.lastName }}
    </div>
    <hr />
    <h2>CẤU TRÚC NGFOROF VÀ NG-TEMPLATE</h2>
    <ng-template
      ngFor
      [ngForOf]="authors"
      let-author
      let-idx="index"
      let-total="count"
    >
      <div>
        ({{ idx }})/({{ total }}): {{ author.id }} - {{ author.firstName }}
        {{ author.lastName }}
      </div>
    </ng-template>
    <hr />

    <div *ngFor="let item of authors">
      <div *ngIf="item.gender === 'Female'">
        {{ item.gender }}
      </div>
    </div>

    <hr />
    <h2>ko add div thừa ng-container or ng-template</h2>
    <div *ngFor="let item of authors">
      <ng-template [ngIf]="item.gender === 'Female'">
        {{ item.gender }}
      </ng-template>
    </div>

  `,
})
export class NgForOfComponent {
  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'male',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];
}
