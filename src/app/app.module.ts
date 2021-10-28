import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabPanelComponent } from './tab/tab-panel.component';
import { TabGroupComponent } from './tab/tab-group.component';
import { BsTabGroupComponent } from './tab/bs-tab-group.component';
import { CountComponent } from './count/count.component';
import { TabContentDirective } from './tab/tab-content.derective';

@NgModule({
  declarations: [
    AppComponent,
    TabPanelComponent,
    TabGroupComponent,
    BsTabGroupComponent,
    CountComponent,
    TabContentDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
