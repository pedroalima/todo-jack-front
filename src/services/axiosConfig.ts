import axios from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

const { jack_token: token } = parseCookies();

if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
