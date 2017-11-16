import { Component, HostListener, ElementRef, OnChanges, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarDayComponent implements OnChanges {
  @Input('dayMeta') dayMeta;
  @Input('calendarEvents') calendarEvents;
  showForm = false;
  @HostListener('document:click', ['$event'])
  clickout(event) {
    this.showForm = this.eRef.nativeElement.contains(event.target);
  }
  constructor(private eRef: ElementRef) { }

  ngOnChanges() {
    for (let e = 0; e < this.calendarEvents.length; e++) {
      const eventDate = new Date(this.calendarEvents[e].date);
      if (eventDate.getDate() === this.dayMeta.dateObject.getDate() &&
        eventDate.getMonth() === this.dayMeta.dateObject.getMonth() &&
        eventDate.getFullYear() === this.dayMeta.dateObject.getFullYear()) {
        this.dayMeta.events.push(this.calendarEvents[e]);
      }
    }
  }

  addEventForm() {
    this.showForm = true;
  }
}
