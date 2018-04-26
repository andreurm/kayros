import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
    private ProfileErrorString: string;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
  } 

  public goSetup(){
    this.navCtrl.push('SetupPage');
  }

  public goHistory(){
    this.navCtrl.push('HistoryPage');
  }

  public goInstructionsProfile(){
    this.navCtrl.push('InstructionsProfilePage');
  }

  public goTimeReminder(){
    this.navCtrl.push('TimeReminderPage');
  }

  public goChangePassword(){
    this.navCtrl.push('ChangePasswordPage');
  }

}
