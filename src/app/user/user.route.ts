import { Routes } from '@angular/router';
import { UserProfileComponent, LoginComponent } from './';

export const userRoutes: Routes = [
    { path: 'profile', component: UserProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: UserProfileComponent }
]