import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CalendarSessions } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-calendar-session-view',
  templateUrl: 'calendar-session-view.html'
})
export class CalendarSessionViewPage {
  calendarSession: any;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
    locale: 'en-US'
  };

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    public calendarSessions: CalendarSessions,
    public translate: TranslateService) {
    this.calendarSession = navParams.get('calendarSession') || null;
  }

}