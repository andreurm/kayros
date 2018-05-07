import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { Settings } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };
  loader = this.loadingCtrl.create({
    content: "",
  });

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public settings: Settings,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public loadingCtrl: LoadingController) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });
  }
  options: any;

  settingsReady = false;
  ionViewWillEnter() {
    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;
    });
  }
  // Attempt to login in through our User service
  doLogin() {
    this.loader.present();
    this.user.login(this.account).subscribe((resp) => {
      this.loader.dismiss();
      this.navCtrl.push(MainPage);
      this.settings.setValue('is_started_by_user', resp['success']['is_started_by_user']);
    }, (err) => {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.loader.dismiss();
    });
  }


  forgot() {
    this.navCtrl.push('ForgotPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }
}
