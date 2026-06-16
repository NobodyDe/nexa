import { Component, inject } from '@angular/core';
import { Aside } from './components/aside/aside';
import { AuthEmailStep } from './components/auth-email-step/auth-email-step';
import { AuthLoginStep } from './components/auth-login-step/auth-login-step';
import { AuthRegisterStep } from './components/auth-register-step/auth-register-step';
import { AuthFacade } from '../../core/services/AuthFacade';

@Component({
  selector: 'app-auth',
  imports: [Aside, AuthEmailStep, AuthLoginStep, AuthRegisterStep],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  private facade = inject(AuthFacade);
  readonly step = this.facade.step;
}
