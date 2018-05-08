import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

import {
  CalendarSession,
  CALENDAR_SESSION_STATE_MISSED,
  /*CALENDAR_SESSION_STATE_BETTER,
  CALENDAR_SESSION_STATE_WORSE,
  CALENDAR_SESSION_STATE_SAME,
  CALENDAR_SESSION_STATE_BAD,
  CALENDAR_SESSION_STATE_WELL*/
} from '../../models/calendar-session';

@Injectable()
export class CalendarSessions {
  calendarSessions: CalendarSession[] = [];


  defaultCalendarSession: any = {
    "day": new Date(Date.UTC(2018, 3, 8)),
    "manual": true,
    "reprogram": true,
    "notification": {
      "text": "Burt Bear",
      "state": CALENDAR_SESSION_STATE_MISSED
    }
  }


  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('calendarsessions.json', params);
  }

  save(calendarSession: CalendarSession) {
    this.calendarSessions.push(calendarSession);

    let seq = this.api.post('calendarsessions/saveState.json', calendarSession).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  rescheduleSession(calendarSession: CalendarSession) {
    let seq = this.api.post('calendarsessions/edit.json', calendarSession).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  addOneSession() {
    let seq = this.api.post('calendarsessions/add', null).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
  addSeveralSessions() {
    let seq = this.api.post('calendarsessions/addSeveral', null).share();

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
