import { Component, effect, inject, signal } from '@angular/core';
import { UserService } from '../../../core/services/user';

@Component({
  selector: 'app-new-post',
  imports: [],
  templateUrl: './new-post.html',
  styleUrl: './new-post.css',
})
export class NewPost {
  private userSerivce = inject(UserService);

  user = this.userSerivce.user;

  postText = signal('');

  onPostTextChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.postText.set(input.value);
  }

  constructor() {
    effect(() => {
      console.log(this.postText());
    });
  }
}
