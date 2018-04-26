import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { SetupPage } from './setup';

@NgModule({
  declarations: [
    SetupPage,
  ],
  imports: [
    IonicPageModule.forChild(SetupPage),
    TranslateModule.forChild()
  ],
  exports: [
    SetupPage
  ]
})
export class SetupPageModule { }
