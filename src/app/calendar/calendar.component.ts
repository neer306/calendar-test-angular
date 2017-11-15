import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {
  currentMonth = new Date().getMonth();
  currentYear= new Date().getFullYear();
  calendarDays = this.getDaysArray();
  constructor() { }

  ngOnInit() {
  }
  getDaysArray() {
    let calendarDays = new Date(this.currentYear, this.currentMonth, 0).getDate();
    let result = [];
    for (let i = 1; i <= calendarDays; i++) {
      result.push({
        day: i,
        currentMonth: true
      });
    }
    let firstDayDate = new Date(this.currentYear, this.currentMonth, result[0]);
    let firstDay = firstDayDate.getDay();
    let lastDayDate = new Date(this.currentYear, this.currentMonth, result[result.length]);
    let lastDay = lastDayDate.getDay();

    while (firstDay) {
      result.push({
        day: firstDayDate.setDate(firstDayDate.getDate() - 1),
        currentMonth: false
      });
      firstDay--;
    }

    while (lastDay > 0) {
      result.push({
        day: lastDayDate.setDate(lastDayDate.getDate() + 1),
        currentMonth: false
      });
      lastDay++;
    }
    console.log(result);
  }
}
