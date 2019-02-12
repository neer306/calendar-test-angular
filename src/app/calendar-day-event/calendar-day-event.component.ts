import { Component, HostListener, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-day-event',
  templateUrl: './calendar-day-event.component.html',
  styleUrls: ['./calendar-day-event.component.css'],
})
export class CalendarDayEventComponent {

  @Input('event')
  event;

  selected = false;

  constructor(private element: ElementRef) { }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent): void {
    this.selected = this.element.nativeElement.contains(event.target);
  }

  showDetail(): void {
    this.selected = true;
  }
}
