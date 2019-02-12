import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_URL = 'https://fast-temple-57619.herokuapp.com/api/calendar/';

@Injectable()
export class ApiService {

    constructor(
        private http: HttpClient
    ) {}

    get(params?: any | null, headers?: any): Observable<any> {
        return this.http.get(API_URL, { params, headers });
    }

    post(params?: any | null, headers?: any): Observable<any> {
        return this.http.post(API_URL, params, { headers });
    }
}
