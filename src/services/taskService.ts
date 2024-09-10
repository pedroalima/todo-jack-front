import { TasksType } from "@/contexts/TaskContext";
import { api } from "./axiosConfig";

export async function getTasks() {
  const response = await api.get("/todo");
  return response.data;
}

export async function createTask(data: Omit<TasksType, "id">) {
  const response = await api.post("/todo", data);
  return response.data;
}

export async function updateTask(id: string, data: Partial<TasksType>) {
  const response = await api.patch(`/todo/${id}`, data);
  return response.data;
}

export async function deleteTask(id: string) {
  const response = await api.delete(`/todo/${id}`);
  return response.data;
}
