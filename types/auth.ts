import { loginSchema, registerSchema } from "@/schemas";
import z from "zod";

export type AuthContextType = {
  account: Account;
  login: (login: Login) => Promise<void>;
  loadProfile: () => Promise<void>;
  registerService: (register: Register) => Promise<void>;
  logout: () => void;
};

export type Account = {
  id: string;
  username: string;
  email: string;
  role: string;
  createdAt: Date;
} | null;

export type LoginFormValues = z.infer<typeof loginSchema>;
export type LoginResponse = {
  success: boolean;
  token: string;
  refreshToken: string;
  expiresAt: Date;
  error: boolean | null;
  user: Account;
};
export type Login = {
  email: string;
  password: string;
};

export type RegisterFormValues = z.infer<typeof registerSchema>;
export type RegisterResponse = {
  success: boolean;
  token: string;
  refreshToken: string;
  expiresAt: Date;
  error: boolean | null;
  user: Account;
};
export type Register = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
