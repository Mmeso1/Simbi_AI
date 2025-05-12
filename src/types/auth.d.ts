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
  id?: string;
  email: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  educationLevel?: string | null;
  preferredStudyMethod?: string | null;
}

// response from logging in
export interface AuthResponse {
  status: string;
  message: string;
  access_token: string;
  refresh_token: string;
}

// response from getting user info
export interface MeResponse {
  status: string;
  message: string;
  user: {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    educationLevel: string | null;
    timezone: string;
    preferredStudyMethod: string | null;
    createdAt: string;
    lastLogin: string | null;
  };
}
