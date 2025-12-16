"use client";

import {
  loadProfile as loadProfileService,
  login as loginService,
  register as registerService,
} from "@/services";
import { Account, AuthContextType, Login, Register } from "@/types";
import React from "react";

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [account, setAccount] = React.useState<Account>(null);

  const handleLogin = async (login: Login) => {
    try {
      const response = await loginService(login);

      localStorage.setItem("token", response.token);

      setAccount(response.user);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async (register: Register) => {
    try {
      await registerService(register);

      window.location.href = "/auth/login";
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadProfile = async () => {
    if (!localStorage.getItem("token")) return;

    try {
      const response = await loadProfileService();

      setAccount(response);
    } catch (error) {
      localStorage.removeItem("token");
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.reload();
  };

  React.useEffect(() => {
    if (account === undefined || account) return;

    handleLoadProfile();
  }, [account]);

  return (
    <AuthContext.Provider
      value={{
        account,
        registerService: handleRegister,
        login: handleLogin,
        loadProfile: handleLoadProfile,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
