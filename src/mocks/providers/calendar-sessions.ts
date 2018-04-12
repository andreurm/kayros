import { Injectable } from '@angular/core';

import { Api } from '../../providers/api/api';

import { 
  CalendarSession, 
  CALENDAR_SESSION_STATE_MISSED,
  CALENDAR_SESSION_STATE_BETTER, 
  CALENDAR_SESSION_STATE_WORSE, 
  CALENDAR_SESSION_STATE_SAME,
  CALENDAR_SESSION_STATE_BAD,
  CALENDAR_SESSION_STATE_WELL
} from '../../models/calendar-session';

@Injectable()
export class CalendarSessions {
  calendarSessions: CalendarSession[] = [];
 

  defaultCalendarSession: any= {
      "day": new Date(Date.UTC(2018, 3, 8)),
      "manual": true,
      "reprogram": true,
      "notification":{
        "text": "Burt Bear",
        "state": CALENDAR_SESSION_STATE_MISSED
      }
  }


  constructor(public api: Api) {
    let calendarSessions = [
      {
        "day": new Date(Date.UTC(2018, 3, 8)),
        "manual": true,
        "reprogram": true,
        "notification":{
          "text": "Burt Bear",
          "state": CALENDAR_SESSION_STATE_WELL
        }
      },
      {
        "day": new Date(Date.UTC(2018, 3, 10)),
        "manual": false,
        "reprogram": true,
        "notification":{
          "text": "Burt Bear",
          "state": CALENDAR_SESSION_STATE_BAD
        }
      },
      {
        "day": new Date(Date.UTC(2018, 3, 12,3,15)),
        "manual": true,
        "reprogram": false,
        "notification":false
      },
      {
        "day": new Date(Date.UTC(2018, 4, 16)),
        "manual": false,
        "reprogram": false,
        "notification":{
          "text": "Burt Bear",
          "state": CALENDAR_SESSION_STATE_MISSED
        }
      },
      {
        "day": new Date(Date.UTC(2018, 5, 22)),
        "manual": false,
        "reprogram": false,
        "notification":{
          "text": "Burt Bear",
          "state": CALENDAR_SESSION_STATE_BETTER
        }
      },
      {
        "day": new Date(Date.UTC(2018, 3, 26,0,54)),
        "manual": true,
        "reprogram": true,
        "notification":{
          "text": "Burt Bear",
          "state": CALENDAR_SESSION_STATE_WORSE
        }
      },
      {
        "day": new Date(Date.UTC(2018, 3, 28)),
        "manual": true,
        "reprogram": true,
        "notification":{
          "text": "Burt Bear",
          "state": CALENDAR_SESSION_STATE_SAME
        }
      },
      
    ];

    for (let calendarSession of calendarSessions) {
      this.calendarSessions.push(new CalendarSession(calendarSession));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.calendarSessions;
    }

    return this.calendarSessions.filter((calendarSession) => {
      for (let key in params) {
        let field = calendarSession[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return calendarSession;
        } else if (field == params[key]) {
          return calendarSession;
        }
      }
      return null;
    });
  }

  save(calendarSession: CalendarSession) {
    this.calendarSessions.push(calendarSession);
    
    let seq = this.api.patch('signup', calendarSession).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        //this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  addOneSession() {    
    let seq = this.api.patch('signup',null).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        //this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
  addSeveralSessions() {    
    let seq = this.api.patch('signup',null).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        //this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /*add(calendarSession: CalendarSession) {
    //this.calendarSessions.push(calendarSession);
    
    let seq = this.api.post('signup', calendarSession).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        //this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }*/

  /*delete(calendarSession: CalendarSession) {
    this.calendarSessions.splice(this.calendarSessions.indexOf(calendarSession), 1);
  }*/
}
