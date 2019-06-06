import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  AppComponent,
  EventListComponent,
  EventThumbnailComponent,
  NavbarComponent,
  EventDetailComponent,
  CreateEventComponent,
  ErrorComponent,
  CreateSessionComponent,
  CollapsibleComponent,
  DurationPipe,
  SessionsComponent,
  SimpleModalComponent,
  ModalTriggerDirective,
  JQ_TOKEN
} from './index'; 

let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionsComponent,
    CollapsibleComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: JQ_TOKEN, useValue: jQuery }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
