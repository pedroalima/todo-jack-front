import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "@/services/taskService";
import { createContext, ReactNode, useEffect, useState } from "react";

export type TasksType = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: string;
};

type TaskContextType = {
  tasks: TasksType[] | [];
  setTasks: (tasks: TasksType[] | []) => void;
  fetchCreateTask: (task: Omit<TasksType, "id">) => Promise<void>;
  fetchUpdateTask: (id: string, data: Partial<TasksType>) => Promise<void>;
  fetchDeleteTask: (id: string) => Promise<void>;
};

export const TaskContext = createContext({} as TaskContextType);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<TasksType[] | []>([]);

  useEffect(() => {
      const fetchTasks = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const task = await getTasks();
        setTasks(task);
      }
      fetchTasks();
  }, []);

  async function fetchCreateTask(data: Omit<TasksType, "id">) {
    const task = await createTask(data);
    setTasks((prevTasks) => [...prevTasks, { ...task, id: task.id }]);
  }

  async function fetchUpdateTask(id: string, data: Partial<TasksType>) {
    const { id: _, ...dataWithoutId } = data;
    const task = await updateTask(id, dataWithoutId);
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === id ? { ...prevTask, ...task } : prevTask
      )
    );
  }

  async function fetchDeleteTask(id: string) {
    await deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        fetchCreateTask,
        fetchUpdateTask,
        fetchDeleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
