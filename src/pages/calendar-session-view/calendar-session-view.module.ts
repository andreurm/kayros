import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarSessionViewPage } from './calendar-session-view';
import { TranslateModule } from '@ngx-translate/core';
import {ComponentsModule} from '../../components/components.module';


@NgModule({
  declarations: [
    CalendarSessionViewPage
  ],
  imports: [
    IonicPageModule.forChild(CalendarSessionViewPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  exports: [
    CalendarSessionViewPage
  ]
})
export class CalendarSessionViewPageModule { }
