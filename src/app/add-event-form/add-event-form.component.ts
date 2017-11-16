import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CalendarEventService } from '../calendar-event.service';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddEventFormComponent implements OnInit {
  @Input('showForm') show;
  @Input('date') date;
  constructor(private calendarEventService: CalendarEventService) { }

  ngOnInit() {
  }

  formSubmit(name, members, about) {
    console.log(name, members, about);
    const body = {
      name: name,
      members: [],
      about: about,
      date: this.date.toISOString()
    };
    this.calendarEventService.addEvent(body).subscribe(response => {
      console.log(response);
      this.show = false;
    });
  }
  hideForm() {
    this.show = false;
  }
}
