import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import * as moment from 'moment';

import { CalendarSessions } from '../../providers/providers';

import {
  CalendarSession
} from '../../models/calendar-session';

@IonicPage()
@Component({
  selector: 'page-reschedule-session',
  templateUrl: 'reschedule-session.html'
})
export class RescheduleSessionPage {

  // Our translated text strings
  private RescheduleSessionTimeErrorString: string;
  private RescheduleSessionTimeSuccessString: string;

  calendarSession: any;


  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    public calendarSessions: CalendarSessions,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public loadingCtrl: LoadingController) {
    this.calendarSession = navParams.get('calendarSession') || null;
    this.translateService.get('RESCHEDULE_SESSION_ERROR').subscribe((value) => {
      this.RescheduleSessionTimeErrorString = value;
    })
    this.translateService.get('RESCHEDULE_SESSION_SUCCESS').subscribe((value) => {
      this.RescheduleSessionTimeSuccessString = value;
    })

  }

  doNow(calendarSession: CalendarSession) {
    this.navCtrl.push('DoSessionPage', {
      calendarSession: calendarSession
    });
  }
  rescheduleSessionOtherTime(calendarSession: CalendarSession) {
    this.navCtrl.push('RescheduleSessionTimePage', {
      calendarSession: calendarSession
    });
  }
  rescheduleAfterDayDiferentTime(calendarSession: CalendarSession) {
    this.navCtrl.push('RescheduleSessionTimePlusDayPage', {
      calendarSession: calendarSession
    });
  }
  rescheduleAfterDaySameTime(calendarSession: CalendarSession) {
    let loader = this.loadingCtrl.create({
      content: "",
    });
    loader.present();
    let original_date = moment(this.calendarSession.day).format('YYYY-MM-DD');
    this.calendarSession.day = moment(moment(original_date).add(1, 'day')).format('YYYY-MM-DD') + ' ' + moment(this.calendarSession.day).format('HH:mm');
    this.calendarSessions.rescheduleSession(this.calendarSession).subscribe((resp) => {
      loader.dismiss();
      this.navCtrl.setRoot('CalendarPage');
      let toast = this.toastCtrl.create({
        message: this.RescheduleSessionTimeSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }, (err) => {
      loader.dismiss();
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.RescheduleSessionTimeErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}
