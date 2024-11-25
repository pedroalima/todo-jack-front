import { TasksType } from "@/contexts/TaskContext";
import { parseCookies } from "nookies";
import { api } from "./axiosConfig";

export async function getTasks() {
  const { jack_token: token } = parseCookies();
  const response = await api.get("/todo", {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response.data;
}

export async function createTask(data: Omit<TasksType, "id">) {
  const { jack_token: token } = parseCookies();
  const response = await api.post("/todo", data, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return response.data;
}

export async function updateTask(id: string, data: Partial<TasksType>) {
  const { jack_token: token } = parseCookies();
  const response = await api.patch(`/todo/${id}`, data, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return response.data;
}

export async function deleteTask(id: string) {
  const { jack_token: token } = parseCookies();
  const response = await api.delete(`/todo/${id}`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return response.data;
}
