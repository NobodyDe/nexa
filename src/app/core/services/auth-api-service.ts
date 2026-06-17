import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CheckEmailResponse, LoginRequest } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private http = inject(HttpClient);

  checkEmail(email: string): Observable<CheckEmailResponse> {
    return this.http.post<CheckEmailResponse>(`${environment.apiUrl}/auth/check-email`, { email });
  }

  login(credentials: LoginRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/auth/login`, credentials);
  }
}
