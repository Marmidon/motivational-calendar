import { Component, OnInit, Output } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import * as moment from 'moment';



@Component({
  selector: 'app-birthday-date',
  templateUrl: './birthday-date.component.html',
  styleUrls: ['./birthday-date.component.css'],
})

export class BirthdayDateComponent implements OnInit {

  calendar = {
    days : [],
    months : [],
    years : []
  };

  dateOfBirth = {
    day : 1,
    month : '',
    year : 1970
  };

  constructor() {
    for (let i = 1; i < 32; i++) {
      this.calendar.days.push(i);
    }
    for (let i = 1950; i < 2018; i++) {
      this.calendar.years.push(i);
    }
    this.calendar.months = moment.months();
    console.log(this.calendar.months);
    this.dateOfBirth.month = this.calendar.months[0];
  }

  public GetDateOfBirth() {
    let month = moment().month(this.dateOfBirth.month).format('M');
    return moment(this.dateOfBirth.year + '-' + month + '-' + this.dateOfBirth.day);
  }
  ngOnInit() {
  }

}
