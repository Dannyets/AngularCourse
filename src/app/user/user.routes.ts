import { Routes } from '@angular/router';
import { LoginComponent, ProfileComponent } from '.';

export const userRoutes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
