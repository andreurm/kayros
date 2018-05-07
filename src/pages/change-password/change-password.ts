import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html'
})
export class ChangePasswordPage {
  formgroup: FormGroup;
  old_password: AbstractControl;
  password: AbstractControl;
  repeat_password: AbstractControl;

  // Our translated text strings
  private changePassErrorString: string;
  constructor(
    public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public formbuider: FormBuilder) {
    this.translateService.get('CHANGE_PASS_ERROR').subscribe((value) => {
      this.changePassErrorString = value;
    })
    this.formgroup = formbuider.group({
      old_password: ['', Validators.required],
      password: ['', Validators.required],
      repeat_password: ['', [
        Validators.required,
        matchOtherValidator('password')
      ]]
    });

    this.old_password = this.formgroup.controls['old_password'];
    this.password = this.formgroup.controls['password'];
    this.repeat_password = this.formgroup.controls['repeat_password'];
  }

  // Attempt to login in through our User service
  changePass() {
    let json = {
      password: this.password.value,
      old_password: this.old_password.value
    };
    this.user.changePass(json).subscribe((resp) => {
      this.navCtrl.setRoot('ProfilePage');
    }, (err) => {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.changePassErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
export function matchOtherValidator(otherControlName: string) {

  let thisControl: AbstractControl;
  let otherControl: AbstractControl;

  return function matchOtherValidate(control: AbstractControl) {

    if (!control.parent) {
      return null;
    }

    // Initializing the validator.
    if (!thisControl) {
      thisControl = control;
      otherControl = control.parent.get(otherControlName) as AbstractControl;
      if (!otherControl) {
        throw new Error('matchOtherValidator(): other control is not found in parent group');
      }
      otherControl.valueChanges.subscribe(() => {
        thisControl.updateValueAndValidity();
      });
    }

    if (!otherControl) {
      return null;
    }

    if (otherControl.value !== thisControl.value) {
      return {
        matchOther: true
      };
    }

    return null;

  }

}
