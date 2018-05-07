import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { CalendarSessions } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-add-session',
  templateUrl: 'add-session.html'
})
export class AddSessionPage {
  private addSessionErrorString: string;
  private addSessionSuccessString: string;
  private addSessionsErrorString: string;
  private addSessionsSuccessString: string;


  constructor(
    public navCtrl: NavController,
    public calendarSessions: CalendarSessions,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get(['ADD_SESSION_ERROR', 'ADD_SESSIONS_ERROR', 'ADD_SESSION_SUCCESS', 'ADD_SESSIONS_SUCCESS']).subscribe((value) => {
      this.addSessionErrorString = value.ADD_SESSION_ERROR;
      this.addSessionsErrorString = value.ADD_SESSIONS_ERROR;
      this.addSessionSuccessString = value.ADD_SESSION_SUCCESS;
      this.addSessionsSuccessString = value.ADD_SESSIONS_SUCCESS;
    });
  }


  addOneSession() {
    this.calendarSessions.addOneSession().subscribe((resp) => {
      this.navCtrl.setRoot('CalendarPage');
      let toast = this.toastCtrl.create({
        message: this.addSessionSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }, (err) => {
      this.navCtrl.setRoot('CalendarPage');
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.addSessionErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  addSeveralSessions() {
    this.calendarSessions.addSeveralSessions().subscribe((resp) => {
      this.navCtrl.setRoot('CalendarPage');
      let toast = this.toastCtrl.create({
        message: this.addSessionsSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }, (err) => {
      this.navCtrl.setRoot('CalendarPage');
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.addSessionsErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }


}
