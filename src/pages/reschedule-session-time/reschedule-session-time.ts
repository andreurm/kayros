import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

import { CalendarSessions } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-reschedule-session-time',
  templateUrl: 'reschedule-session-time.html'
})
export class RescheduleSessionTimePage {
  formgroup: FormGroup;
  rescheduleSessionTimeTimeStart: AbstractControl;
  loader = this.loadingCtrl.create({
    content: "",
  });

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
    public formbuider: FormBuilder,
    public loadingCtrl: LoadingController) {
    this.calendarSession = navParams.get('calendarSession') || null;
    this.translateService.get('RESCHEDULE_SESSION_ERROR').subscribe((value) => {
      this.RescheduleSessionTimeErrorString = value;
    })
    this.translateService.get('RESCHEDULE_SESSION_SUCCESS').subscribe((value) => {
      this.RescheduleSessionTimeSuccessString = value;
    })
    this.formgroup = formbuider.group({
      rescheduleSessionTimeTimeStart: ['', Validators.required]
    });

    this.rescheduleSessionTimeTimeStart = this.formgroup.controls['rescheduleSessionTimeTimeStart'];
  }

  // Attempt to login in through our User service
  rescheduleSessionTime() {
    this.loader.present();
    let original_date = moment(this.calendarSession.day).format('YYYY-MM-DD');
    this.calendarSession.day = moment(moment(original_date)).format('YYYY-MM-DD') + ' ' + this.rescheduleSessionTimeTimeStart.value;
    this.calendarSessions.rescheduleSession(this.calendarSession).subscribe((resp) => {
      this.loader.dismiss();
      this.navCtrl.setRoot('CalendarPage');
      let toast = this.toastCtrl.create({
        message: this.RescheduleSessionTimeSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }, (err) => {
      this.loader.dismiss();
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