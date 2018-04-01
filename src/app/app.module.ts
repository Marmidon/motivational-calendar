import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BirthdayDateComponent } from './birthday-date/birthday-date.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EventEmitter } from '@angular/core';
import { ResultPanelComponent } from './result-panel/result-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BirthdayDateComponent,
    ResultPanelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
