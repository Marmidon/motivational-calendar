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
  targetAges = [
    60,
    65,
    70,
    75,
    80
  ];
  targetAgeToPassToResult;
  public generate = function() {
    this.birthday = this.birthdayComponent.GetDateOfBirth();
    this.target_date = moment(this.birthday);
    this.target_date.add(this.targetAge, 'years');
    this.weeks = this.birthday.diff(this.target_date, 'weeks');
    this.showResult = true;
    this.targetAgeToPassToResult = this.targetAge;
  };
}
