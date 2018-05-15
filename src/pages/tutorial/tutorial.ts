import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { Settings } from '../../providers/providers';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  showHeaderLogo = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform,
    public settings: Settings) {
    this.dir = platform.dir();
    translate.get(["TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            description: values.TUTORIAL_SLIDE1_DESCRIPTION,
            image: 'assets/img/intro-1.jpg',
          },
          {
            description: values.TUTORIAL_SLIDE2_DESCRIPTION,
            image: 'assets/img/intro-2.jpg',
          },
          {
            description: values.TUTORIAL_SLIDE3_DESCRIPTION,
            image: 'assets/img/intro-3.jpg',
          }
        ];
      });
  }

  settingsReady = false;
  options: any;
  ionViewWillEnter() {
    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;
    });
  }

  startApp() {
    this.settings.setValue('show_tutorial', false);

    this.navCtrl.setRoot('LoginPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
    this.showHeaderLogo = !slider.isEnd();
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
