import { Routes } from '@angular/router';
import { Home } from './feature/home/home';
import { Auth } from './feature/auth/auth';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  { path: 'login', component: Auth, title: 'Login' },
  { path: '**', redirectTo: 'home' },
];
