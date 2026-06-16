import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-continue-button',
  imports: [NgClass],
  templateUrl: './continue-button.html',
  styleUrl: './continue-button.css',
})
export class ContinueButton {
  label = input.required<string>();
  type = input<string>();
  isDisable = input<boolean>(false);

  clicked = output<void>();

  handleClick(): void {
    if (this.isDisable()) return;
    this.clicked.emit();
  }
}
