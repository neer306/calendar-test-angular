import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const API_URL = 'https://fast-temple-57619.herokuapp.com/api/calendar/';

@Injectable()
export class CalendarEventService {
  constructor(private http: HttpClient) { }
  getEvents() {
    return this.http.get(API_URL);
  }
  addEvent(body) {
    return this.http.post(API_URL, body);
  }
}
