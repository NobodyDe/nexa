import { Component } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { Posts } from './components/posts/posts';

@Component({
  selector: 'app-home',
  imports: [Sidebar, Posts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
