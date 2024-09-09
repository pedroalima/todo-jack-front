import { api } from "@/services/axiosConfig";
import { parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserType | undefined;
  signIn: ({ email, password }: SignInType) => Promise<void>;
};

type SignInType = {
  email: string;
  password: string;
};

type UserType = {
  email: string;
  name: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | undefined>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { jack_token: token } = parseCookies();

    if (token) {
      (async () => {
        const response = await api.get("/user/data");
        setUser(response.data);
      })();
    }
  }, []);

  async function signIn({ email, password }: SignInType) {
    const response = await api.post("/login", {
      email,
      password,
    });

    const { access_token, user } = await response.data;

    setCookie(undefined, "jack_token", access_token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });
    setUser(user);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
