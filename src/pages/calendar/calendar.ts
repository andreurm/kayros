import { Component } from '@angular/core';
import { IonicPage,NavController, MenuController,ModalController, AlertController,Platform,  } from 'ionic-angular';
import * as moment from 'moment';

import { 
  CalendarSession, 
  CALENDAR_SESSION_STATE_MISSED,
  CALENDAR_SESSION_STATE_BETTER, 
  CALENDAR_SESSION_STATE_WORST, 
  CALENDAR_SESSION_STATE_SAME 
} from '../../models/calendar-session';
import { CalendarSessions } from '../../providers/providers';

import { TranslateService } from '@ngx-translate/core';
 
@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  currentCalendarSessions: CalendarSession[];
 
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  
  constructor(public navCtrl: NavController, public calendarSessions: CalendarSessions, private modalCtrl: ModalController, private alertCtrl: AlertController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.currentCalendarSessions = this.calendarSessions.query();    

    for (let item of this.currentCalendarSessions) {
      let state= item.notification.state ? item.notification.state : CALENDAR_SESSION_STATE_MISSED;

      this.eventSource.push({
        title: "Kayros",
        allDay: false,
        startTime: item.day,
        endTime: item.day,        
        manual: item.manual,
        reprogram: item.reprogram,
        state:state
      });
    }

    /*this.eventSource = [
      {        
        title: 'Session 1',
        startTime: new Date(Date.UTC(2018, 3, 8)),
        endTime: new Date(Date.UTC(2018, 3, 8)),
        allDay:false,
        result: 2
      }
    ];*/

   }
 /*
  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }*/
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    /*let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();*/
  }
 
  onTimeSelected(ev) {
    //this.selectedDay = ev.selectedTime;
  }

  markDisabled = (date: Date) => {
    /*var current = new Date();
    return date < current || date > current;*/
    return false;
  };
}