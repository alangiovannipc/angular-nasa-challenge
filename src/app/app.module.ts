import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageModule } from '../pages';

@NgModule({
  imports: [BrowserModule, PageModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
