import * as moment from 'moment';

export class CalendarSession {

    constructor(fields: any) {
      // Quick and dirty extend/assign fields to this model
      for (const f in fields) {
        // @ts-ignore
        this[f] = fields[f];
      }
    }

    isDone(){
      return !(this.notification.state==CALENDAR_SESSION_STATE_MISSED || !this.notification.state);
    }

    formatDate(){
      return moment(this.day).format('dddd, D MMMM Y');
    }
    formatDateTime(){
      return moment(this.day).format('dddd, D MMMM Y, H:mm');
    }
  
  }
  
  export interface CalendarSession {
    [prop: string]: any;
  }
  

  export const CALENDAR_SESSION_STATE_MISSED=0;
  export const CALENDAR_SESSION_STATE_BETTER=1;
  export const CALENDAR_SESSION_STATE_WORSE=2;
  export const CALENDAR_SESSION_STATE_SAME=3;
  export const CALENDAR_SESSION_STATE_BAD=4;
  export const CALENDAR_SESSION_STATE_WELL=5;