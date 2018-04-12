import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { MainPage } from '../pages';

export interface Slide {
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-instructions',
  templateUrl: 'instructions.html'
})
export class InstructionsPage {
  slides: Slide[];
  showDone=false;
 
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["INSTRUCTIONS_SLIDE1_DESCRIPTION",
      "INSTRUCTIONS_SLIDE2_DESCRIPTION",
      "INSTRUCTIONS_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {            
            description: values.INSTRUCTIONS_SLIDE1_DESCRIPTION,
            image: 'assets/img/instructions-1.jpg',
          },
          {            
            description: values.INSTRUCTIONS_SLIDE2_DESCRIPTION,
            image: 'assets/img/instructions-2.jpg',
          },
          {            
            description: values.INSTRUCTIONS_SLIDE3_DESCRIPTION,
            image: 'assets/img/instructions-3.jpg',
          }
        ];
      });
  }

  toCalendar() {
    this.navCtrl.setRoot(MainPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showDone = slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
