import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppAduPipe } from './app-adu.pipe';

import { AppComponent } from './app.component';
import { FormatAddressPipe } from './format-address-pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormatAddressPipe,
    AppAduPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
