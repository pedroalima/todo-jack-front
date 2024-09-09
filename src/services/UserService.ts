import { SignInType } from "@/contexts/AuthContext";
import { api } from "./axiosConfig";

export async function loginUser({ email, password }: SignInType) {
  const response = await api.post("/login", {
    email,
    password,
  });

  return response.data;
}

export async function getUser() {
  const response = await api.get("/user/data");

  return response.data;
}
