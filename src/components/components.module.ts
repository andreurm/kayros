import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WrapHistorySessionComponent } from './wrap-history-session/wrap-history-session';
import { IonicModule } from "ionic-angular";
@NgModule({
	declarations: [WrapHistorySessionComponent],
	imports: [IonicModule],
	exports: [WrapHistorySessionComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]	
})
export class ComponentsModule {}
