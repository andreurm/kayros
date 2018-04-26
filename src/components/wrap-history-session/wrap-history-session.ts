import { Component, Input, transition } from '@angular/core';
import {
  CalendarSession,
  CALENDAR_SESSION_STATE_MISSED,
  CALENDAR_SESSION_STATE_BETTER,
  CALENDAR_SESSION_STATE_WORSE,
  CALENDAR_SESSION_STATE_SAME,
  CALENDAR_SESSION_STATE_BAD,
  CALENDAR_SESSION_STATE_WELL
} from '../../models/calendar-session';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the WrapHistorySessionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wrap-history-session',
  templateUrl: 'wrap-history-session.html'
})
export class WrapHistorySessionComponent {
  @Input() session: CalendarSession;
  state: Number;
  state_text: String;
  calendarSessionStates: any;
  constructor(
    public translateService: TranslateService) {
    this.calendarSessionStates = {
      CALENDAR_SESSION_STATE_MISSED: CALENDAR_SESSION_STATE_MISSED,
      CALENDAR_SESSION_STATE_BETTER: CALENDAR_SESSION_STATE_BETTER,
      CALENDAR_SESSION_STATE_WORSE: CALENDAR_SESSION_STATE_WORSE,
      CALENDAR_SESSION_STATE_SAME: CALENDAR_SESSION_STATE_SAME,
      CALENDAR_SESSION_STATE_BAD: CALENDAR_SESSION_STATE_BAD,
      CALENDAR_SESSION_STATE_WELL: CALENDAR_SESSION_STATE_WELL
    }
    console.log(this.calendarSessionStates);
  }

  ngOnInit() {
    this.state = this.session.notification.state ? this.session.notification.state : CALENDAR_SESSION_STATE_MISSED;
  }
}
