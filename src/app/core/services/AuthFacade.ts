import { inject, Injectable, signal } from '@angular/core';
import { AuthApiService } from './auth-api-service';
import { finalize, take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from '../cookies/TokenService';
import { UserService } from './user';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private api = inject(AuthApiService);
  private tokenService = inject(TokenService);
  private userService = inject(UserService);
  private router = inject(Router);

  step = signal<'email' | 'login' | 'register'>('email');
  loading = signal(false);
  error = signal<string | null>(null);
  email = signal('');

  submitEmail(email: string) {
    this.loading.set(true);
    this.error.set(null);
    this.email.set(email);

    this.api
      .checkEmail(email)
      .pipe(
        take(1),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: ({ emailExist }) => {
          this.step.set(emailExist ? 'login' : 'register');
        },
        error: (err: HttpErrorResponse) => {
          this.error.set('Não foi possível validar o email.');
          this.loading.set(false);
        },
      });
  }
  submitLogin({ email, password }: { email: string; password: string }) {
    this.loading.set(true);
    this.error.set(null);

    this.api
      .login({ email, password })
      .pipe(
        take(1),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: () => {
          this.loadUserFromAccessToken();
          this.router.navigate(['/home']);
        },
        error: (err: HttpErrorResponse) => {
          this.error.set('Credencial invalida, tente novamente.');
          this.loading.set(false);
        },
      });
  }
  loadUserFromAccessToken(): void {
    const accessToken = Cookies.get('access_token');

    if (!accessToken) {
      console.log('cookie não encontrado');
      this.userService.clearUser();
      return;
    }

    const payload = this.tokenService.decodeToken(accessToken);

    if (!payload) {
      this.userService.clearUser();
      return;
    }

    this.userService.updateUser({
      name: payload.username,
      profileName: payload.profile_name,
      profilePic: payload.image_url,
      description: payload.description,
      email: payload.email,
    });
  }
}
