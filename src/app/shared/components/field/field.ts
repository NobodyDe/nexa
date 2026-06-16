import { Component, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-field',
  imports: [],
  templateUrl: './field.html',
  styleUrl: './field.css',
})
export class Field {
  label = input<string>();
  type = input<string>('text');
  placeholder = input<string>('');
  value = input<string>('');

  valueChange = output<string>();
  focused = output<void>();
  blurred = output<void>();
  focusChange = output<boolean>();

  isFocused = false;
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
