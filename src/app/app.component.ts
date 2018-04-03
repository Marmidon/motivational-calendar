import { Component, ViewChild, AfterViewInit, QueryList } from "@angular/core";
import { BirthdayDateComponent } from "./birthday-date/birthday-date.component";
import * as moment from "moment";
import { ResultPanelComponent } from "./result-panel/result-panel.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild(BirthdayDateComponent)
  private birthdayComponent: BirthdayDateComponent;
  @ViewChild(ResultPanelComponent)
  private resultComponent: QueryList<ResultPanelComponent>;
  birthday;
  targetAge = 70;
  target_date;
  weeks;
  loading = false;
  targetAges = [60, 65, 70, 75, 80];
  targetAgeToPassToResult;
  public generate = function() {
    this.loading = true;
    this.birthday = this.birthdayComponent.GetDateOfBirth();
    this.target_date = moment(this.birthday);
    this.target_date.add(this.targetAge, "years");
    this.weeks = this.birthday.diff(this.target_date, "weeks");
    let now = moment();
    this.weeksRemaining = this.target_date.diff(now, "weeks");
    if (this.weeksRemaining <= 0) {
      this.targetAge = this.targetAges[this.targetAges.length - 1];
      this.generate();
      return;
    }
    this.targetAgeToPassToResult = this.targetAge;
    this.resultComponent.generateResult(this.birthday, this.targetAge);
  };

  ngAfterViewInit() {

  }
  ngForRendred() {

  }
}
