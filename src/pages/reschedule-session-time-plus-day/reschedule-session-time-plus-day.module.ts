import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { RescheduleSessionTimePlusDayPage } from './reschedule-session-time-plus-day';
import { CalendarSessions } from '../../providers/providers';

@NgModule({
  declarations: [
    RescheduleSessionTimePlusDayPage,
  ],
  imports: [
    IonicPageModule.forChild(RescheduleSessionTimePlusDayPage),
    TranslateModule.forChild()
  ],
  exports: [
    RescheduleSessionTimePlusDayPage
  ],
  providers: [CalendarSessions],
})
export class RescheduleSessionTimePlusDayPageModule { }
