import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CalendarSessions } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-do-session',
  templateUrl: 'do-session.html'
})
export class DoSessionPage {
  calendarSession: any;

  constructor(public navCtrl: NavController, navParams: NavParams, calendarSessions: CalendarSessions) {
    this.calendarSession = navParams.get('calendarSession') || null
  }

}
