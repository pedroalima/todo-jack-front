import { SignInType, SignUpType } from "@/contexts/AuthContext";
import { parseCookies } from "nookies";
import { api } from "./axiosConfig";

export async function loginUser({ email, password }: SignInType) {
  const response = await api.post("/login", {
    email,
    password,
  });

  return response.data;
}

export async function getUser() {
  const { jack_token: token } = parseCookies();
  const response = await api.get("/user/data", {
    headers: {
      "Authorization" : `Bearer ${token}`
    }
  });

  return response.data;
}

export async function createUser({ email, name, password } : SignUpType) {
  const response = await api.post("/user", {
    email, 
    name, 
    password
  });

  return response.data;
}
