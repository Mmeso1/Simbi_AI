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

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
  };
  access_token: string;
  refresh_token: string;
}
