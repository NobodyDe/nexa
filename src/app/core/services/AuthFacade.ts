import { inject, Injectable, signal } from '@angular/core';
import { AuthApiService } from './auth-api-service';
import { finalize, take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private api = inject(AuthApiService);

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
        next: ({ exists }) => {
          this.step.set(exists ? 'login' : 'register');
        },
        error: (err: HttpErrorResponse) => {
          this.error.set('Não foi possível validar o email.');
          this.loading.set(false);
        },
      });
  }
}
