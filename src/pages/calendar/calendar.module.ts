import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { TranslateModule } from '@ngx-translate/core';

import { NgCalendarModule  } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { CalendarSessions } from '../../providers/providers';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(CalendarPage),
    TranslateModule.forChild()
  ],
  exports: [
    CalendarPage
  ],
  providers: [CalendarSessions],
})
export class CalendarPageModule { }
