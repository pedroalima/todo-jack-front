import { parseCookies } from "nookies";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const { jack_token: token } = parseCookies();

  return token ? children : <Navigate to="/sign-in" />;
}
