import { Component, input, output } from '@angular/core';
import { LucideDynamicIcon, LucideIconData } from '@lucide/angular';

export interface IconButtonProps {
  icon: LucideIconData;
  label: string;
}

@Component({
  selector: 'app-icon-button',
  imports: [LucideDynamicIcon],
  templateUrl: './icon-button.html',
  styleUrl: './icon-button.css',
})
export class IconButton {
  label = input.required<string>();
  icon = input.required<LucideIconData>();
  clicked = output<void>();
}
