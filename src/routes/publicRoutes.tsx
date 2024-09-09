import { parseCookies } from "nookies";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }: { children: ReactNode }) {
  const { jack_token: token } = parseCookies();

  return !token ? children : <Navigate to="/dashboard" />;
}
