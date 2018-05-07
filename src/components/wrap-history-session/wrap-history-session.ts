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
  calendarSessionStates: any[]=[];
  stateMissedString: String;
  stateBetterString: String;
  stateWorseString: String;
  stateSameString: String;
  stateBadString: String;
  stateWellString: String;

  constructor(
    public translateService: TranslateService) {
    this.translateService.get('STATE_MISSED').subscribe((value) => {
      this.stateMissedString = value;
    });
    this.translateService.get('STATE_BETTER').subscribe((value) => {
      this.stateBetterString = value;
    });
    this.translateService.get('STATE_WORSE').subscribe((value) => {
      this.stateWorseString = value;
    });
    this.translateService.get('STATE_SAME').subscribe((value) => {
      this.stateSameString = value;
    });
    this.translateService.get('STATE_BAD').subscribe((value) => {
      this.stateBadString = value;
    });
    this.translateService.get('STATE_WELL').subscribe((value) => {
      this.stateWellString = value;
    });
    this.calendarSessionStates[CALENDAR_SESSION_STATE_MISSED] = this.stateMissedString;
    this.calendarSessionStates[CALENDAR_SESSION_STATE_BETTER] = this.stateBetterString;
    this.calendarSessionStates[CALENDAR_SESSION_STATE_WORSE] = this.stateWorseString;
    this.calendarSessionStates[CALENDAR_SESSION_STATE_SAME] = this.stateSameString;
    this.calendarSessionStates[CALENDAR_SESSION_STATE_BAD] = this.stateBadString;
    this.calendarSessionStates[CALENDAR_SESSION_STATE_WELL] = this.stateWellString;
  }
  ngOnInit() {
    this.state = this.session.notification.state != null ? this.calendarSessionStates[this.session.notification.state] : '';
  }
}
