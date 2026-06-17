import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  decodePayload<T>(token: string): T | null {
    try {
      const [, payload] = token.split('.');

      if (!payload) {
        return null;
      }

      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const json = atob(base64);
      return JSON.parse(json) as T;
    } catch {
      return null;
    }
  }
}
