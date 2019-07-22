import { Routes } from '@angular/router';
import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events';
import { Error404Component } from './error/404.component';

export const appRoutes: Routes = [
    {
        path: 'events',
        component: EventListComponent,
        resolve: { events: EventListResolver },
    },
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent,
        canActivate: [EventRouteActivator]
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: 'user', loadChildren: './user/user.module#UserModule'
    }
];
