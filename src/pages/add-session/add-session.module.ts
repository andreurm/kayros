import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AddSessionPage } from './add-session';

import { CalendarSessions } from '../../providers/providers';

@NgModule({
  declarations: [
    AddSessionPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSessionPage),
    TranslateModule.forChild()
  ],
  exports: [
    AddSessionPage
  ],
  providers: [CalendarSessions]
})
export class AddSessionPageModule { }
