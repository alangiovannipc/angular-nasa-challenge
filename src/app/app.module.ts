import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageModule } from '../pages';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, PageModule, AppRoutingModule, CommonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
