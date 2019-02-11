import { Component, Input } from '@angular/core';

import { CalendarEventService } from '../calendar-event.service';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css'],
})
export class AddEventFormComponent {

  @Input('showForm')
  show;

  @Input('date')
  date;

  constructor(
    private calendarEventService: CalendarEventService
  ) { }

  formSubmit(name: string, members: string, about: string): void {
    const request = {
      name: name,
      members:  members ? members.split(',').map(item => item.trim()) : [],
      about: about ? about : '',
      date: this.date.toISOString(),
    };

    this.calendarEventService.addEvent(request).subscribe(response => {
      if (response['success']) {
        this.calendarEventService.updateEventsSignal();
        this.show = false;
      }
    });
  }

  hideForm(): void {
    this.show = false;
  }
}
