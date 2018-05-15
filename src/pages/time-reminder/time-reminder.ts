import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-time-reminder',
  templateUrl: 'time-reminder.html'
})
export class TimeReminderPage {
  formgroup: FormGroup;
  kind: AbstractControl;
  userKindsNotificationsStates: any = {
    "K30M": 0,
    "K1H": 1,
    "K4H": 2,
    "K10H": 3,
    "K20H": 4
  }

  private setTimeReminderErrorString: string;
  private setTimeReminderSuccessString: string;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public user: User,
    public translateService: TranslateService,
    public formbuider: FormBuilder,
    public loadingCtrl: LoadingController) {

    this.translateService.get(['SET_TIME_REMINDER_ERROR','SET_TIME_REMINDER_SUCCESS']).subscribe((value) => {
      this.setTimeReminderErrorString = value.SET_TIME_REMINDER_ERROR;
      this.setTimeReminderSuccessString = value.SET_TIME_REMINDER_SUCCESS;
    })
    this.formgroup = formbuider.group({
      kind: ['', Validators.required]
    });

    this.kind = this.formgroup.controls['kind'];
  }

  // Attempt to login in through our User service
  sendTimeReminder() {
    let loader = this.loadingCtrl.create({
      content: "",
    });
    loader.present();
    let json = {
      kind: this.kind.value
    }
    this.user.setTimeForReminder(json).subscribe((resp) => {
      loader.dismiss();
      this.navCtrl.setRoot('ProfilePage');
      let toast = this.toastCtrl.create({
        message: this.setTimeReminderSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }, (err) => {
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: this.setTimeReminderErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}
