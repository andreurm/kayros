import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { CalendarSessions } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-reschedule-session',
  templateUrl: 'reschedule-session.html'
})
export class RescheduleSessionPage {
    private rescheduleSessionErrorString: string;

    calendarSession: any;


  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    public calendarSessions: CalendarSessions,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

      this.calendarSession = navParams.get('calendarSession') || null;
      this.translateService.get('RESCHEDULE_SESSION_ERROR').subscribe((value) => {
        this.rescheduleSessionErrorString = value;
      });

  }

  
  rescheduleSession() {
    this.calendarSessions.rescheduleSession(this.calendarSession).subscribe((resp) => {
      this.navCtrl.pop();
    }, (err) => {
      this.navCtrl.pop();
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.rescheduleSessionErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });    
  }  

}
