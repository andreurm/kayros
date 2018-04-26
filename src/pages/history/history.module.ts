import { NgModule }      from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';
import {ComponentsModule} from '../../components/components.module';

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
  ]
})
export class HistoryPageModule { }
