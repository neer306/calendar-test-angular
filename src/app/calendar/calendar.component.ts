import { Component, Input, OnChanges } from '@angular/core';

import { IEvent } from "../store/events.store";

export interface ICalendarDay {
  number: number;
  currentMonth: boolean;
  dateObject: Date;
  events: IEvent[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})

export class CalendarComponent implements OnChanges {

  @Input('month')
  month: number;

  @Input('year')
  year: number;

  calendarDays: ICalendarDay[] = [];

  constructor() {}

  ngOnChanges(): void {
      this.calendarDays = this.getDaysArray(this.month, this.year);
  }

  getDaysArray(month: number, year: number): ICalendarDay[] {
    const calendarDays = new Date(year, month + 1, 0).getDate();
    const result = [];

    for (let i = 1; i <= calendarDays; i++) {
      result.push({
        number: i,
        currentMonth: true,
        dateObject: new Date(year, month, i),
        events: [],
      });
    }

    const firstDayDate = new Date(year, month, result[0].number);
    let firstDay = firstDayDate.getDay();
    const lastDayDate = new Date(year, month, result[result.length - 1].number);
    let lastDay = lastDayDate.getDay();

    while (firstDay > 1) {
      const numberFirst = new Date(firstDayDate.setDate(firstDayDate.getDate() - 1)).getDate();
      result.unshift({
        number: numberFirst,
        currentMonth: false,
        dateObject: new Date(year, month - 1, numberFirst),
        events: [],
      });
      firstDay--;
    }

    while (lastDay > 0 && lastDay < 7) {
      const numberLast = new Date(lastDayDate.setDate(lastDayDate.getDate() + 1)).getDate();
      result.push({
        number: numberLast,
        currentMonth: false,
        dateObject: new Date(year, month + 1, numberLast),
        events: [],
      });
      lastDay++;
    }

    return result;
  }
}
