import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CounterActions} from "../redux/actions/counter-actions";
import {NgReduxModule} from "ng2-redux";
import {UserListActions} from "../redux/actions/user-list-actions";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
    CounterActions,
    UserListActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
