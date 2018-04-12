import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstructionsPage } from './instructions';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    InstructionsPage,
  ],
  imports: [
    IonicPageModule.forChild(InstructionsPage),
    TranslateModule.forChild()
  ],
  exports: [
    InstructionsPage
  ]
})
export class InstructionsPageModule { }
