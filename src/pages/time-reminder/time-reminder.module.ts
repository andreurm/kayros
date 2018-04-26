import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeReminderPage } from './time-reminder';

@NgModule({
  declarations: [
    TimeReminderPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeReminderPage),
    TranslateModule.forChild()
  ],
  exports: [
    TimeReminderPage
  ]
})
export class TimeReminderPageModule { }
