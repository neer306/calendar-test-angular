import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import { MonthSelectorComponent } from './calendar-month-selector/calendar-month-selector.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    MonthSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
