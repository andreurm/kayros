import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { RescheduleSessionPage } from './reschedule-session';

@NgModule({
  declarations: [
    RescheduleSessionPage,
  ],
  imports: [
    IonicPageModule.forChild(RescheduleSessionPage),
    TranslateModule.forChild()
  ],
  exports: [
    RescheduleSessionPage
  ]
})
export class RescheduleSessionPageModule { }
