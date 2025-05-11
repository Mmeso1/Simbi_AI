export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  email: string;
  id?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
}

// response from logging in
export interface AuthResponse {
  status: string;
  message: string;
  access_token: string;
  refresh_token: string;
}
