export interface CheckEmailResponse {
  emailExist: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AccessTokenPayload {
  sub: string;
  name: string;
  profileName: string;
  profilePic: string;
  email: string;
  iat: number;
  exp: number;
}
