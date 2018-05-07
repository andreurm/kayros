import { NgModule }      from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';
import {ComponentsModule} from '../../components/components.module';

import { CalendarSessions } from '../../providers/providers';
@NgModule({
  declarations: [
    HistoryPage
    
  ],
  imports: [
    IonicPageModule.forChild(HistoryPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  exports: [
    HistoryPage
  ],
  providers: [CalendarSessions],
})
export class HistoryPageModule { }
