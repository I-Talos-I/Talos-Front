"use client"

import { loadProfile as loadProfileService, login as loginService } from "@/services";
import { Account, AuthContextType, Login } from "@/types";
import { redirect } from "next/navigation";
import React from "react";

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [account, setAccount] = React.useState<Account>(null);

  const handleLogin = async (login: Login) => {
    try {
      const response = await loginService(login);

      localStorage.setItem("token", response.token);

      setAccount(response.user);
      redirect("/");
    } catch (error) {
      console.error(error);
    }
  }

  const handleLoadProfile = async () => {
    if (!localStorage.getItem('token')) return;

    try {
      const response = await loadProfileService();

      setAccount(response);
    } catch (error) {
      localStorage.removeItem("token");
      console.error(error);
    }
  }

  React.useEffect(() => {
    if (account === undefined || account) return;

    handleLoadProfile();
  }, [account]);

  return (
    <AuthContext.Provider
      value={{ account, login: handleLogin, loadProfile: handleLoadProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}
