import { Component, computed, input, output, signal } from '@angular/core';
import { LucideArrowLeft } from '@lucide/angular';
import { PasswordField } from '../../../../shared/components/password-field/password-field';
import { ContinueButton } from '../../../../shared/components/continue-button/continue-button';

@Component({
  selector: 'app-auth-login-step',
  imports: [LucideArrowLeft, PasswordField, ContinueButton],
  templateUrl: './auth-login-step.html',
  styleUrl: './auth-login-step.css',
})
export class AuthLoginStep {
  email = input.required<string>();
  password = signal('');
  canContinue = computed(() => this.password().trim().length > 0);
  continue = output<string>();

  setPassword(value: string) {
    this.password.set(value);
  }
  onContinue() {
    this.continue.emit(this.password());
  }
}
