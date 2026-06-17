import { Component, computed, output, signal } from '@angular/core';
import { LucideApple, LucidePhone } from '@lucide/angular';
import { Field } from '../../../../shared/components/field/field';
import { ContinueButton } from '../../../../shared/components/continue-button/continue-button';

@Component({
  selector: 'app-auth-email-step',
  imports: [LucidePhone, LucideApple, Field, ContinueButton],
  templateUrl: './auth-email-step.html',
  styleUrl: './auth-email-step.css',
})
export class AuthEmailStep {
  email = signal('');

  canContinue = computed(() => this.email().trim().length > 0);
  continue = output<string>();

  setEmail(value: string) {
    this.email.set(value);
  }
  onFocusChange(event: boolean) {
    console.log(event);
  }
  onContinue() {
    this.continue.emit(this.email());
  }
}
