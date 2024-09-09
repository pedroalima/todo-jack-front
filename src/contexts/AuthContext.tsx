import { setCookie } from "nookies";
import { createContext, ReactNode } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: ({ email, password }: SignInType) => Promise<void>;
};

type SignInType = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const isAuthenticated = false;

  async function signIn({ email, password }: SignInType) {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setCookie(undefined, "jack_token", data.access_token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });
      // Handle successful login here
      console.log("Login successful:", data);
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error here
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
