import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MONTHLIST } from '../context';

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MonthSelectorComponent implements OnInit {
  currentMonth = MONTHLIST[new Date().getMonth()];
  currentYear = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }
  changeMonth(action): void {
    const index = MONTHLIST.indexOf(this.currentMonth);
    if (action === 'next') {
      if (index < 11) {
        this.currentMonth = MONTHLIST[index + 1];
      } else {
        this.currentMonth = MONTHLIST[0];
        this.currentYear = this.currentYear + 1;
      }
    } else if (action === 'prev') {
      this.currentMonth = index > 0 ? MONTHLIST[index - 1] : MONTHLIST[11];
      if (index < 0) {
        this.currentMonth = MONTHLIST[index - 1];
      } else {
        this.currentMonth = MONTHLIST[11];
        this.currentYear = this.currentYear - 1;
      }
    }
  }
}
