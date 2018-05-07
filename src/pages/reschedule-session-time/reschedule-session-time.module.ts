import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { RescheduleSessionTimePage } from './reschedule-session-time';
import { CalendarSessions } from '../../providers/providers';

@NgModule({
  declarations: [
    RescheduleSessionTimePage,
  ],
  imports: [
    IonicPageModule.forChild(RescheduleSessionTimePage),
    TranslateModule.forChild()
  ],
  exports: [
    RescheduleSessionTimePage
  ],
  providers: [CalendarSessions],
})
export class RescheduleSessionTimePageModule { }
