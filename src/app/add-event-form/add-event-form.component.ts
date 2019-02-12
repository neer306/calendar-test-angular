import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { CalendarEventService } from '../service/calendar-event.service';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css'],
})
export class AddEventFormComponent {

  @Input('showForm')
  show: boolean;

  @Input('date')
  date: Date;

  form: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private calendarEventService: CalendarEventService
  ) {

    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      members: ['', [Validators.required]],
      about: '',
    });
  }

  formSubmit(): void {
    const request = Object.assign(
        {},
        this.form.value,
        {
          members: this.form.value.members ? this.form.value.members.split(',').map(item => item.trim()) : [],
          date: this.date.toISOString(),
        }
    );

    this.calendarEventService.addEvent(request).subscribe(response => {
      if (response.success) {
        this.calendarEventService.updateEventsSignal();
        this.show = false;
      }
    });
  }

  hideForm(): void {
    this.show = false;
  }
}
