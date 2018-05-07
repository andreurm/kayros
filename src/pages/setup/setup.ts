import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../providers/providers';
import { Settings } from '../../providers/providers';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {
  minDate = moment.utc().startOf('day').format('YYYY-MM-DD');
  maxDate = moment.utc().add(1, 'y').format('YYYY-MM-DD');
  formgroup: FormGroup;
  setupDateStart: AbstractControl;
  setupTimeStart: AbstractControl;
  loader = this.loadingCtrl.create({
    content: "",
  });

  // Our translated text strings
  private SetupErrorString: string;
  private SetupSuccessString: string;
  constructor(
    public navCtrl: NavController,
    public user: User,
    public settings: Settings,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public formbuider: FormBuilder,
    public loadingCtrl: LoadingController) {
    this.translateService.get('SETUP_ERROR').subscribe((value) => {
      this.SetupErrorString = value;
    })
    this.translateService.get('SETUP_SUCCESS').subscribe((value) => {
      this.SetupSuccessString = value;
    })
    this.formgroup = formbuider.group({
      setupDateStart: ['', Validators.required],
      setupTimeStart: ['', Validators.required]
    });

    this.setupDateStart = this.formgroup.controls['setupDateStart'];
    this.setupTimeStart = this.formgroup.controls['setupTimeStart'];
  }

  // Attempt to login in through our User service
  doSetup() {
    this.loader.present();
    let json = {
      day: this.setupDateStart.value,
      time: this.setupTimeStart.value
    };
    this.user.setup(json).subscribe((resp) => {
      this.settings.setValue('is_started_by_user', true);
      this.loader.dismiss();
      this.navCtrl.setRoot('ProfilePage');
      let toast = this.toastCtrl.create({
        message: this.SetupSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }, (err) => {
      this.loader.dismiss();
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.SetupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}