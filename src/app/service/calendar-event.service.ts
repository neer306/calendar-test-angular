import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ApiService } from "./api.service";


@Injectable()
export class CalendarEventService {

  updateEventsSource = new Subject<string>();
  updateEventsObservable: Observable<string> = this.updateEventsSource.asObservable();

  constructor(
    private apiService: ApiService
  ) { }

  getEvents(): Observable<IGetEventsRequest> {
    return this.apiService.get();
  }

  addEvent(body: IAddEventsRequest): Observable<IGetEventsResponse> {
    return this.apiService.post(body);
  }

  updateEventsSignal(): void {
    this.updateEventsSource.next();
  }
}

export interface IGetEventsRequest {
  list: any[];
}

export interface IAddEventsRequest {
  name: string;
  members: string[];
  about: string;
  date: string;
}

export interface IGetEventsResponse {
  success: number;
}
