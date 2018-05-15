import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Settings } from '../../providers/providers';
import { LoadingController } from 'ionic-angular';
import { User } from '../../providers/providers';
import { FirstRunPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  private RestartProgramErrorString: string;
  private RestartProgramSuccessString: string;
  private LogoutErrorString: string;
  private LogoutSuccessString: string;
  is_started_by_user: boolean;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public settings: Settings,
    public user: User,
    public translateService: TranslateService,
    public loadingCtrl: LoadingController) {


    this.translateService.get(['RESTART_PROGRAM_ERROR', 'RESTART_PROGRAM_SUCCESS', 'LOGOUT_ERROR', 'LOGOUT_SUCCESS']).subscribe((value) => {
      this.RestartProgramErrorString = value.RESTART_PROGRAM_ERROR,
        this.RestartProgramSuccessString = value.RESTART_PROGRAM_SUCCESS,
        this.LogoutErrorString = value.LOGOUT_ERROR,
        this.LogoutSuccessString = value.LOGOUT_SUCCESS
    });
    this.settings.getValue('is_started_by_user').then(val => {
      this.is_started_by_user = val;
    });
  }
  public restartProgram() {
    let loader = this.loadingCtrl.create({
      content: "",
    });
    loader.present();
    this.user.restartProgram().subscribe((resp) => {
      loader.dismiss();
      this.navCtrl.setRoot('CalendarPage');
      let toast = this.toastCtrl.create({
        message: this.RestartProgramSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }, (err) => {
      loader.dismiss();
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.RestartProgramErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  public goSetup() {
    this.navCtrl.push('SetupPage');
  }
  public goHistory() {
    this.navCtrl.push('HistoryPage');
  }

  public goInstructionsProfile() {
    this.navCtrl.parent.parent.setRoot('InstructionsProfilePage');
  }

  public goTimeReminder() {
    this.navCtrl.push('TimeReminderPage');
  }

  public goChangePassword() {
    this.navCtrl.push('ChangePasswordPage');
  }

  public logout() {
    let loader = this.loadingCtrl.create({
      content: "",
    });
    this.user.logout().subscribe((resp) => {
      loader.dismiss();
      this.navCtrl.parent.parent.setRoot(FirstRunPage);
      let toast = this.toastCtrl.create({
        message: this.LogoutSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }, (err) => {
      loader.dismiss();
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.LogoutErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}
