import { Routes } from '@angular/router';

import {
    EventListComponent,
    EventRouteActivatorService,
    EventListResolverService,
    EventDetailComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent
  } from '../';

export const appRoutes: Routes = [
    { path: 'user', loadChildren: './user/user.module#UserModule'},
    { path: 'error', component: ErrorComponent },
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventListComponent, resolve: { 'events': EventListResolverService } },
    { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '', redirectTo: 'events', pathMatch: 'full'}
]