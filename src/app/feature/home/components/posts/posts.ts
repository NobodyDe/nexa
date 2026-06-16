import { Component } from '@angular/core';
import { Post } from '../../../../shared/components/post/post';
import { NewPost } from '../../../../shared/components/new-post/new-post';

export interface postsProps {
  profilePic: string;
  user: string;
  username: string;
  textContent: string;
}

@Component({
  selector: 'app-posts',
  imports: [Post, NewPost],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  posts: postsProps[] = [
    {
      profilePic: 'https://avatars.githubusercontent.com/u/97177344?v=4',
      user: 'debate y debate',
      username: '@debateydebate',
      textContent: `NÃO VAI TER BRASIL E MARROCOS <br> NOVA YORK ACABA HOJE`,
    },
    {
      profilePic: 'https://avatars.githubusercontent.com/u/97177344?v=4',
      user: 'Opala 6 Canecos',
      username: '@opaladavida',
      textContent: `Não existe um carro melhor que o opala 6 canecos`,
    },
  ];
}
