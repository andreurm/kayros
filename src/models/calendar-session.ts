
export class CalendarSession {

    constructor(fields: any) {
      // Quick and dirty extend/assign fields to this model
      for (const f in fields) {
        // @ts-ignore
        this[f] = fields[f];
      }
    }
  
  }
  
  export interface CalendarSession {
    [prop: string]: any;
  }
  

  export const CALENDAR_SESSION_STATE_MISSED=0;
  export const CALENDAR_SESSION_STATE_BETTER=1;
  export const CALENDAR_SESSION_STATE_WORST=2;
  export const CALENDAR_SESSION_STATE_SAME=3;