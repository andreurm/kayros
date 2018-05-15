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
  selector: 'page-instructions-profile',
  templateUrl: 'instructions-profile.html'
})
export class InstructionsProfilePage {
  slides: Slide[];
  showDone=false;
 
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["INSTRUCTIONS_PROFILE_SLIDE1_DESCRIPTION",
      "INSTRUCTIONS_PROFILE_SLIDE2_DESCRIPTION",
      "INSTRUCTIONS_PROFILE_SLIDE3_DESCRIPTION",
      "INSTRUCTIONS_PROFILE_SLIDE4_DESCRIPTION",
      "INSTRUCTIONS_PROFILE_SLIDE5_DESCRIPTION",
    ]).subscribe(
      (values) => {
        this.slides = [
          {            
            description: values.INSTRUCTIONS_PROFILE_SLIDE1_DESCRIPTION,
            image: 'assets/img/instructions-profile-1.jpg',
          },
          {            
            description: values.INSTRUCTIONS_PROFILE_SLIDE2_DESCRIPTION,
            image: 'assets/img/instructions-profile-2.jpg',
          },
          {            
            description: values.INSTRUCTIONS_PROFILE_SLIDE3_DESCRIPTION,
            image: 'assets/img/instructions-profile-3.jpg',
          },
          {            
            description: values.INSTRUCTIONS_PROFILE_SLIDE4_DESCRIPTION,
            image: 'assets/img/instructions-profile-4.jpg',
          },
          {            
            description: values.INSTRUCTIONS_PROFILE_SLIDE5_DESCRIPTION,
            image: 'assets/img/instructions-profile-5.jpg',
          }
        ];
      });
  }

  goProfile() {
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
