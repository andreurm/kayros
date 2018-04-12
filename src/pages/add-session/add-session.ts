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
    private addSessionsErrorString: string;


  constructor(
    public navCtrl: NavController,
    public calendarSessions: CalendarSessions,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
      
      this.translateService.get(['ADD_SESSION_ERROR','ADD_SESSIONS_ERROR']).subscribe((value) => {
        this.addSessionErrorString = value.ADD_SESSION_ERROR;
        this.addSessionsErrorString = value.ADD_SESSIONS_ERROR;
      });
  }

  
  addOneSession() {
    this.calendarSessions.addOneSession().subscribe((resp) => {
      this.navCtrl.pop();
    }, (err) => {
      this.navCtrl.pop();
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
      this.navCtrl.pop();
    }, (err) => {
      this.navCtrl.pop();
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
