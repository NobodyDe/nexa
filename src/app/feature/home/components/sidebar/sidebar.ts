import { Component } from '@angular/core';
import { LucideBellDot, LucideHouse, LucideSearch, type LucideIconData } from '@lucide/angular';
import { IconButton } from '../../../../shared/components/icon-button/icon-button';

interface SidebarMenuItem {
  icon: LucideIconData;
  label: string;
}

interface SidebarUser {
  name: string;
  profileName: string;
  profilePic: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [IconButton],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menuButtons: SidebarMenuItem[] = [
    { icon: LucideHouse.icon, label: 'Home' },
    { icon: LucideSearch.icon, label: 'Explorar' },
    { icon: LucideBellDot.icon, label: 'Notificações' },
  ];

  user: SidebarUser = {
    name: 'Guts',
    profileName: '@GutsSocaFofo',
    profilePic:
      'https://avatars.githubusercontent.com/u/129473274?s=400&u=bd74e307af5334899f11af8035c5d3ee972c8cb7&v=4',
  };

  onMenuClick(item: SidebarMenuItem): void {
    console.log('Menu clicado:', item.label);
  }
}
