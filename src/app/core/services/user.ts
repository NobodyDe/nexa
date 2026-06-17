import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSignal = signal<User | null>(null);

  readonly user = this.userSignal.asReadonly();

  updateUser(user: User): void {
    this.userSignal.set(user);
  }

  clearUser(): void {
    this.userSignal.set(null);
  }
}
