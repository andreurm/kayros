import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { CalendarSessions } from '../../providers/providers';
import { 
  CALENDAR_SESSION_STATE_MISSED,
  CALENDAR_SESSION_STATE_BETTER, 
  CALENDAR_SESSION_STATE_WORSE, 
  CALENDAR_SESSION_STATE_SAME,
  CALENDAR_SESSION_STATE_BAD,
  CALENDAR_SESSION_STATE_WELL
} from '../../models/calendar-session';


@IonicPage()
@Component({
  selector: 'page-do-session',
  templateUrl: 'do-session.html'
})
export class DoSessionPage {
  calendarSession: any;
  calendarSessionStates: any={
    CALENDAR_SESSION_STATE_MISSED: CALENDAR_SESSION_STATE_MISSED,
    CALENDAR_SESSION_STATE_BETTER: CALENDAR_SESSION_STATE_BETTER,
    CALENDAR_SESSION_STATE_WORSE: CALENDAR_SESSION_STATE_WORSE,
    CALENDAR_SESSION_STATE_SAME: CALENDAR_SESSION_STATE_SAME,
    CALENDAR_SESSION_STATE_BAD: CALENDAR_SESSION_STATE_BAD,
    CALENDAR_SESSION_STATE_WELL: CALENDAR_SESSION_STATE_WELL
  }

  private doSessionErrorString: string;


  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    public calendarSessions: CalendarSessions,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
      this.calendarSession = navParams.get('calendarSession') || null;
      this.translateService.get('DO_SESSION_ERROR').subscribe((value) => {
        this.doSessionErrorString = value;
      });
  }

  // Attempt to login in through our User service
  sendSessionResult() {
    this.calendarSessions.save(this.calendarSession).subscribe((resp) => {
      this.navCtrl.parent.parent.setRoot('InstructionsPage', {}, {
        animate: true,
        direction: 'forward'
      });
    }, (err) => {
      this.navCtrl.parent.parent.setRoot('InstructionsPage', {}, {
        animate: true,
        direction: 'forward'
      });
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.doSessionErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
    
  }
  

}
