import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IEvent {
    name: string;
    about: string;
    members: string[];
    date: string;
}

@Injectable()
export class EventsStore {
    private store: BehaviorSubject<IEvent[]> = new BehaviorSubject(<IEvent[]> {});

    constructor() {}

    get info(): Observable<any> {
        return this.asObservable(this.store);
    }

    asObservable(subject: BehaviorSubject<any>): Observable<any> {
        return new Observable(fn => subject.subscribe(fn));
    }

    update(events: IEvent[]): void {
        this.store.next(events);
    }
}
