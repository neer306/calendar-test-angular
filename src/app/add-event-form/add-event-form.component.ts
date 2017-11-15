import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddEventFormComponent implements OnInit {
  @Input('showForm') show;
  constructor() { }

  ngOnInit() {
  }

}
