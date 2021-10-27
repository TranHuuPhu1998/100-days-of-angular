import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabPanelComponent } from './tab/tab-panel.component';
import { TabGroupComponent } from './tab/tab-group.component';
import { BsTabGroupComponent } from './tab/bs-tab-group.component';

@NgModule({
  declarations: [
    AppComponent,
    TabPanelComponent,
    TabGroupComponent,
    BsTabGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
