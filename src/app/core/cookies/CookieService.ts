import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  get(name: string): string | null {
    const cookies = document.cookie.split('; ');

    const cookie = cookies.find((currentCookie) => currentCookie.startsWith(`${name}=`));

    if (!cookie) {
      return null;
    }

    return decodeURIComponent(cookie.split('=')[1]);
  }
}
