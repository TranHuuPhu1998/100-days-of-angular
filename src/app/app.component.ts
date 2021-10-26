import { Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name  = 'phu tran';
  checked = true;

  @ViewChild('toggleComp') toggleComp: ToggleComponent = new ToggleComponent;
  @ViewChild('nameForm', {
    read: ElementRef,
    static: true
  })
  nameForm: ElementRef<HTMLFormElement> | undefined;

  @ViewChildren(ToggleComponent) toggleList: QueryList<ToggleComponent> | undefined;

  ngOnInit(){
    setTimeout(() => {
      this.nameForm?.nativeElement.focus();
    },2000);
  }

  ngAfterViewInit() {
    console.log(this.toggleList?.changes.subscribe());
  }

  toggleInside() {
    this.toggleComp.toggle();
  }
}
