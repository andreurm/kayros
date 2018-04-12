import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { DoSessionPage } from './do-session';

@NgModule({
  declarations: [
    DoSessionPage,
  ],
  imports: [
    IonicPageModule.forChild(DoSessionPage),
    TranslateModule.forChild()
  ],
  exports: [
    DoSessionPage
  ]
})
export class DoSessionPageModule { }
