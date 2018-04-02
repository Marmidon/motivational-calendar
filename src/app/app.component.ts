import { Component, ViewChild } from '@angular/core';
import { BirthdayDateComponent } from './birthday-date/birthday-date.component';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(BirthdayDateComponent) private birthdayComponent: BirthdayDateComponent;
  birthday;
  targetAge = 70;
  target_date;
  weeks;
  showResult = false;
  loading = false;
  targetAges = [
    60,
    65,
    70,
    75,
    80
  ];
  targetAgeToPassToResult;
  public generate = function() {
    this.loading = true;
    this.birthday = this.birthdayComponent.GetDateOfBirth();
    this.target_date = moment(this.birthday);
    this.target_date.add(this.targetAge, 'years');
    this.weeks = this.birthday.diff(this.target_date, 'weeks');
    let now = moment();
    this.weeksRemaining = this.target_date.diff(now, 'weeks');
    if (this.weeksRemaining <= 0) {
      this.targetAge = this.targetAges[this.targetAges.length - 1];
      this.generate();
      return;
    }
    this.showResult = true;
    this.targetAgeToPassToResult = this.targetAge;
    this.loading = false;
  };
}
