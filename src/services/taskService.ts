import { TasksType } from "@/contexts/TaskContext";
import axios from "axios";
import { parseCookies } from "nookies";
import { api } from "./axiosConfig";

export async function getTasks() {
  const { jack_token: token } = parseCookies();
  const response = await axios.get("http://localhost:3000/todo", {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response.data;
}

export async function createTask(data: Omit<TasksType, "id">) {
  const response = await api.post("/todo", data);
  return response.data;
}

export async function updateTask(id: string, data: Partial<TasksType>) {
  const { jack_token: token } = parseCookies();
  const response = await api.patch(`http://localhost:3000/todo/${id}`, data, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return response.data;
}

export async function deleteTask(id: string) {
  const response = await api.delete(`/todo/${id}`);
  return response.data;
}
