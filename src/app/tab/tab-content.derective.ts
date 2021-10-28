import { Directive , TemplateRef } from "@angular/core";

@Directive({
  selector:'ng-template[tabContent]'
})

export class TabContentDirective {
  // cách 1
  // constructor(public templateRef: TemplateRef<unknown>){}
}
