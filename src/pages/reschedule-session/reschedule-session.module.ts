import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { RescheduleSessionPage } from './reschedule-session';

import { CalendarSessions } from '../../providers/providers';

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
  ],
  providers: [CalendarSessions],
})
export class RescheduleSessionPageModule { }
