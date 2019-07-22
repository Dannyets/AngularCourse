import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import {
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivator,
  EventListResolver,
  SessionListComponent,
  DurationPipe
} from './events';
import { Error404Component } from './error/404.component';

import { ToasterService, CollapsibleWellComponent } from './common';

import { appRoutes } from './routes';
import { AuthService } from './user';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventListComponent,
    CreateEventComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    Error404Component
  ],
  providers: [
    EventService,
    ToasterService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }

  return true;
}
