import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstructionsProfilePage } from './instructions-profile';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    InstructionsProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(InstructionsProfilePage),
    TranslateModule.forChild()
  ],
  exports: [
    InstructionsProfilePage
  ]
})
export class InstructionsProfilePageModule { }
