import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-day-event',
  templateUrl: './calendar-day-event.component.html',
  styleUrls: ['./calendar-day-event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarDayEventComponent implements OnInit {
  @Input('event') event;
  selected = false;
  constructor() { }

  ngOnInit() {
  }
  showDetail() {
    this.selected = true;
  }
}
