import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html'
})
export class ForgotPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string} = {
    email: ''
  };
  loader = this.loadingCtrl.create({
    content: "",
  });

  // Our translated text strings
  private forgotErrorString: string;
  private forgotSuccessString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public loadingCtrl: LoadingController) {

    this.translateService.get(["FORGOT_ERROR",
    "FORGOT_SUCCESS"]).subscribe((values) => {
      this.forgotErrorString = values.FORGOT_ERROR;
      this.forgotSuccessString = values.FORGOT_SUCCESS;
    })
  }

  // Attempt to login in through our User service
  doForgot() {
    this.user.forgot(this.account).subscribe((resp) => {
      this.navCtrl.pop();
      let toast = this.toastCtrl.create({
        message: this.forgotSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }, (err) => {     
      // Unable to forgot
      let toast = this.toastCtrl.create({
        message: this.forgotErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  backToLogin(){
    this.navCtrl.pop();
  }
}
