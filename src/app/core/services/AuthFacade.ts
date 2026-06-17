import { inject, Injectable, signal } from '@angular/core';
import { AuthApiService } from './auth-api-service';
import { finalize, take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from '../cookies/CookieService';
import { TokenService } from '../cookies/TokenService';
import { UserService } from './user';
import { AccessTokenPayload } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private api = inject(AuthApiService);
  private cookieService = inject(CookieService);
  private tokenService = inject(TokenService);
  private userService = inject(UserService);

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
        next: () => {},
        error: (err: HttpErrorResponse) => {
          this.error.set('Credencial invalida, tente novamente.');
          this.loading.set(false);
        },
      });
  }
  loadUserFromAccessToken(): void {
    const accessToken = this.cookieService.get('accessToken');

    if (!accessToken) {
      this.userService.clearUser();
      return;
    }

    const payload = this.tokenService.decodePayload<AccessTokenPayload>(accessToken);

    if (!payload) {
      this.userService.clearUser();
      return;
    }

    this.userService.updateUser({
      name: payload.name,
      profileName: payload.profileName,
      profilePic: payload.profilePic,
    });
  }
}
