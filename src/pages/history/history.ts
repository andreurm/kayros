import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import * as moment from 'moment';
import { Observable } from 'rxjs/Rx';

import {
  CalendarSession,
  CALENDAR_SESSION_STATE_MISSED
} from '../../models/calendar-session';
import { CalendarSessions } from '../../providers/providers';

import { TranslateService } from '@ngx-translate/core';


@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  currentCalendarSessions: CalendarSession[] = [];
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public calendarSessions: CalendarSessions) {
    this.fetchCalendarSessions();
  }

  private fetchCalendarSessions(): void {

    this.calendarSessions.query().subscribe((resp) => {
      for (let item of resp['calendarsessions']) {
        item = new CalendarSession(item);
        this.currentCalendarSessions.push(item);
      }
    }, (err) => {
    });
  }


}
