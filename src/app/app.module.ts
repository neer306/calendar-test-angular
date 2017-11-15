import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    MonthSelectorComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
