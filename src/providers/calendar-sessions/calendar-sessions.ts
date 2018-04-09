import { Injectable } from '@angular/core';

import { CalendarSession } from '../../models/calendar-session';
import { Api } from '../api/api';

@Injectable()
export class CalendarSessions {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/calendar-sessions', params);
  }

  add(calendarSession: CalendarSession) {
  }

  delete(calendarSession: CalendarSession) {
  }

}
