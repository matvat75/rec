import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PlusComponent } from './plus/plus.component';
import { CalendarComponent } from './calendar/calendar.component';
// routing import {AngularFontAwesomeModule} from 'angular-font-awesome';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlusComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    // BrowserModule , AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
