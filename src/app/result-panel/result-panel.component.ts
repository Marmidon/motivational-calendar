import { Component, OnInit, Input, OnChanges, NgModule, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-result-panel',
  templateUrl: './result-panel.component.html',
  styleUrls: ['./result-panel.component.css']
})

@NgModule({
  imports: [
    NgbModule.forRoot()
  ]
})




export class ResultPanelComponent implements OnChanges {
  @Input() birthDate: moment.Moment;
  @Input() targetAge: number;
  @Output()
    loadingChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input()
    loading: boolean;
  target_date: moment.Moment;
  weeksPassedBetweenBirthAndNow;
  weeksBetweenBirthAndTarget;
  weeksRemaining;
  now1;
  weeksPassedArray = [];
  weeksRemainingArray = [];
  constructor() {
    this.target_date = moment();
   }
  print() {
    let printContents, popupWin, printTitle;
    printTitle = document.getElementById('print-title').innerHTML;
    printContents = document.getElementById('printable').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title></title>
          <style>
           .text {
            text-align: center;
           }
          </style>
        </head>
      <body onload="window.print();window.close()">
        <div class="text">
          <h4>Weeks until I am ${this.targetAge}</h4>
          <p>Make every week count!</p>
        </div>
          ${printContents}
      </body>
      </html>`
    );
    popupWin.document.close();
  }

  ngOnChanges() {
    if (this.targetAge && this.birthDate) {
      this.target_date = moment(this.birthDate);
      this.target_date.add(this.targetAge, 'years');
      this.weeksBetweenBirthAndTarget = this.target_date.diff(this.birthDate, 'weeks');
      let now = moment();
      this.now1 = now;
      this.weeksPassedBetweenBirthAndNow = now.diff(this.birthDate, 'weeks');
      this.weeksRemaining = this.target_date.diff(now, 'weeks');
      this.weeksPassedArray = [];
      for (let i = 1; i <= this.weeksPassedBetweenBirthAndNow; i++) {
        this.weeksPassedArray.push(i);
      }
      this.weeksRemainingArray = [];
      for (let i = 1; i <= this.weeksRemaining; i++) {
        this.weeksRemainingArray.push(i);
      }
      this.loadingChange.emit(this.loading);
    }
  }

}
