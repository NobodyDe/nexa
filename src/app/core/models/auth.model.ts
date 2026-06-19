export interface CheckEmailResponse {
  emailExist: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AccessTokenPayload {
  sub: string;
  username: string;
  profile_name: string;
  image_url: string;
  description: string;
  email: string;
  iat: number;
  exp: number;
}
