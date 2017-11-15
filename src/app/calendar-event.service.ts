import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class CalendarEventService {
  constructor(private http: HttpClient) { }
  onInit() {
    this.getEvents();
  }
  getEvents() {
    return this.http.get('https://fast-temple-57619.herokuapp.com/api/calendar/');
  }
}
