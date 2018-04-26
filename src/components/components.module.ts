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


/*
Error: Uncaught (in promise): Error: Type WrapHistorySessionComponent is part of the declarations of 2 modules: HistoryPageModule and CalendarSessionViewPageModule! Please consider moving WrapHistorySessionComponent to a higher module that imports HistoryPageModule and CalendarSessionViewPageModule. You can also create a new NgModule that exports and includes WrapHistorySessionComponent then import that NgModule in HistoryPageModule and CalendarSessionViewPageModule.
Error: Type WrapHistorySessionComponent is part of the declarations of 2 modules: HistoryPageModule and CalendarSessionViewPageModule! Please consider moving WrapHistorySessionComponent to a higher module that imports HistoryPageModule and CalendarSessionViewPageModule. You can also create a new NgModule that exports and includes WrapHistorySessionComponent then import that NgModule in HistoryPageModule and CalendarSessionViewPageModule.
    at syntaxError (http://localhost:8100/build/vendor.js:99675:34)
    at CompileMetadataResolver._addTypeToModule (http://localhost:8100/build/vendor.js:114599:31)
    at http://localhost:8100/build/vendor.js:114471:27
    at Array.forEach (<anonymous>)
    at CompileMetadataResolver.getNgModuleMetadata (http://localhost:8100/build/vendor.js:114462:54)
    at JitCompiler._loadModules (http://localhost:8100/build/vendor.js:133595:87)
    at JitCompiler._compileModuleAndComponents (http://localhost:8100/build/vendor.js:133556:36)
    at JitCompiler.compileModuleAsync (http://localhost:8100/build/vendor.js:133450:37)
    at CompilerImpl.compileModuleAsync (http://localhost:8100/build/vendor.js:98497:49)
    at http://localhost:8100/build/vendor.js:79279:25
    at c (http://localhost:8100/build/polyfills.js:3:19752)
    at Object.reject (http://localhost:8100/build/polyfills.js:3:19174)
    at Tab.NavControllerBase._fireError (http://localhost:8100/build/vendor.js:56686:16)
    at Tab.NavControllerBase._failed (http://localhost:8100/build/vendor.js:56679:14)
    at http://localhost:8100/build/vendor.js:56726:59
    at t.invoke (http://localhost:8100/build/polyfills.js:3:14976)
    at Object.onInvoke (http://localhost:8100/build/vendor.js:5123:33)
    at t.invoke (http://localhost:8100/build/polyfills.js:3:14916)
	at r.run (http://localhost:8100/build/polyfills.js:3:10143)
	

	*/