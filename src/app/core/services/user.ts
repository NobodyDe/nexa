import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSignal = signal<User>({
    name: 'Guts',
    profileName: '@GutsOnlyReadOnly',
    profilePic:
      'https://avatars.githubusercontent.com/u/129473274?s=400&u=bd74e307af5334899f11af8035c5d3ee972c8cb7&v=4',
  });
  // Expõe o signal como readonly (somente leitura) para os consumidores
  // Isso é um padrão de encapsulamento — ninguém de fora pode alterar o signal diretamente
  readonly user = this.userSignal.asReadonly();

  // Método para atualizar o usuário (quando precisar no futuro)
  updateUser(user: User): void {
    this.userSignal.set(user);
  }
}
