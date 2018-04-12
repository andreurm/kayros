import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { TranslateModule } from '@ngx-translate/core';

import { NgCalendarModule  } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
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
  ]
})
export class CalendarPageModule { }
