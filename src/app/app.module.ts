import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarEventService } from './calendar-event.service';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { CalendarDayEventComponent } from './calendar-day-event/calendar-day-event.component';


@NgModule({
  declarations: [
    AppComponent,
    MonthSelectorComponent,
    CalendarComponent,
    CalendarDayComponent,
    AddEventFormComponent,
    CalendarDayEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CalendarEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
