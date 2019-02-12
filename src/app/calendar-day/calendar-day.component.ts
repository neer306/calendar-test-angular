import { Component, HostListener, ElementRef, OnChanges, Input, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription } from "rxjs";

import { ICalendarDay } from "../calendar/calendar.component";
import { EventsStore, IEvent } from "../store/events.store";

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css'],
})
export class CalendarDayComponent implements OnChanges, OnInit, OnDestroy {

  @Input('dayMeta')
  dayMeta: ICalendarDay;

  showForm = false;

  subscriptions: Subscription;
  calendarEvents: IEvent[] = [];

  constructor(
      private element: ElementRef,
      private eventStore: EventsStore
  ) { }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent): void {
    const target = <HTMLElement>event.target;
    this.showForm = this.element.nativeElement.contains(target) && !target.classList.contains('calendar__day-event');
  }

  ngOnInit(): void {
    this.subscriptions = this.eventStore.info.subscribe(events => {
      this.calendarEvents = events;
      this.updateDayEvents();
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dayMeta && !changes.dayMeta.firstChange && changes.dayMeta.currentValue) {
      this.updateDayEvents();
    }
  }

  updateDayEvents(): void {
    this.calendarEvents.forEach(item => {
      const eventDate = new Date(item.date);
      if (eventDate.getDate() === this.dayMeta.dateObject.getDate() &&
          eventDate.getMonth() === this.dayMeta.dateObject.getMonth() &&
          eventDate.getFullYear() === this.dayMeta.dateObject.getFullYear()) {
        this.dayMeta.events.push(item);
      }
    });
  }

  addEventForm(): void {
    this.showForm = true;
  }
}
