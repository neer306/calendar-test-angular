import { Component, OnInit } from '@angular/core';

import { MonthList } from '../constants';

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.css'],
})
export class MonthSelectorComponent implements OnInit {

  currentMonthNum: number;
  currentMonth: string;
  currentYear: number;

  constructor() {}

  ngOnInit(): void {
    this.currentMonthNum = new Date().getMonth();
    this.currentMonth = MonthList[this.currentMonthNum];
    this.currentYear = new Date().getFullYear();
  }

  changeMonth(action: 'next' | 'prev'): void {
    const index = MonthList.indexOf(this.currentMonth);

    if (action === 'next') {
      if (index < 11) {
        this.currentMonthNum = index + 1;
      } else {
        this.currentMonthNum = 0;
        this.currentYear = this.currentYear + 1;
      }
    } else if (action === 'prev') {
      if (index > 0) {
        this.currentMonthNum = index - 1;
      } else {
        this.currentMonthNum = 11;
        this.currentYear = this.currentYear - 1;
      }
    }

    this.currentMonth = MonthList[this.currentMonthNum];
  }
}
