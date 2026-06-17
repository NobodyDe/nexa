import { Component, computed, input, output, signal } from '@angular/core';
import { LucideEye, LucideEyeOff } from '@lucide/angular';

@Component({
  selector: 'app-password-field',
  imports: [LucideEyeOff, LucideEye],
  templateUrl: './password-field.html',
  styleUrl: './password-field.css',
})
export class PasswordField {
  inputType = computed(() => (this.showPassword() ? 'text' : 'password'));
  showPassword = signal<boolean>(false);
  placeholder = input<string>('');
  value = input<string>('');

  valueChange = output<string>();
  focused = output<void>();
  blurred = output<void>();
  focusChange = output<boolean>();

  isFocused = false;
  toggleVisibility() {
    this.showPassword.update((value) => !value);
  }
  onInput(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.valueChange.emit(valor);
  }
  onFocus() {
    this.isFocused = true;
    this.focusChange.emit(true);
  }
  onBlur() {
    this.isFocused = false;
    this.focusChange.emit(false);
  }
}
