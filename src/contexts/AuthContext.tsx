import { getUser, loginUser } from "@/services/userService";
import { parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";

export type SignInType = {
  email: string;
  password: string;
};

export type UserType = {
  email: string;
  name: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserType | undefined;
  signIn: ({ email, password }: SignInType) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | undefined>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { jack_token: token } = parseCookies();

    if (token) {
      (async () => {
        const userData = await getUser();
        setUser(userData);
      })();
    }
  }, []);

  async function signIn({ email, password }: SignInType) {
    const { access_token, user } = await loginUser({ email, password });

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
