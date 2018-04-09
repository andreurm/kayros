import { Injectable } from '@angular/core';

import { 
  CalendarSession, 
  CALENDAR_SESSION_STATE_MISSED,
  CALENDAR_SESSION_STATE_BETTER, 
  CALENDAR_SESSION_STATE_WORST, 
  CALENDAR_SESSION_STATE_SAME
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


  constructor() {
    let calendarSessions = [
      {
        "day": new Date(Date.UTC(2018, 3, 8)),
        "manual": true,
        "reprogram": true,
        "notification":{
          "text": "Burt Bear",
          "state": CALENDAR_SESSION_STATE_MISSED
        }
      },
      {
        "day": new Date(Date.UTC(2018, 3, 10)),
        "manual": false,
        "reprogram": true,
        "notification":{
          "text": "Burt Bear",
          "state": CALENDAR_SESSION_STATE_MISSED
        }
      },
      {
        "day": new Date(Date.UTC(2018, 3, 3)),
        "manual": true,
        "reprogram": false,
        "notification":{
          "text": "Burt Bear",
          "state": CALENDAR_SESSION_STATE_MISSED
        }
      },
      {
        "day": new Date(Date.UTC(2018, 3, 16)),
        "manual": false,
        "reprogram": false,
        "notification":{
          "text": "Burt Bear",
          "state": CALENDAR_SESSION_STATE_MISSED
        }
      },
      {
        "day": new Date(Date.UTC(2018, 3, 22)),
        "manual": false,
        "reprogram": false,
        "notification":{
          "text": "Burt Bear",
          "state": CALENDAR_SESSION_STATE_BETTER
        }
      },
      {
        "day": new Date(Date.UTC(2018, 3, 26)),
        "manual": true,
        "reprogram": true,
        "notification":{
          "text": "Burt Bear",
          "state": CALENDAR_SESSION_STATE_WORST
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

  add(calendarSession: CalendarSession) {
    this.calendarSessions.push(calendarSession);
  }

  delete(calendarSession: CalendarSession) {
    this.calendarSessions.splice(this.calendarSessions.indexOf(calendarSession), 1);
  }
}
