import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useMemo, useState } from "react";
import { FaCheck, FaPlusCircle, FaTrashAlt, FaUndo } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { TbProgressCheck } from "react-icons/tb";

interface TasksType {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

export function DashboardPage() {
  const [tasks, setTasks] = useState<TasksType[]>([
    {
      id: 1,
      title: "Finish project proposal",
      description: "Write up the project proposal and send it to the client",
      dueDate: "2023-06-30",
      status: "todo",
    },
    {
      id: 2,
      title: "Attend team meeting",
      description: "Discuss project progress with the team",
      dueDate: "2023-06-15",
      status: "in progress",
    },
    {
      id: 3,
      title: "Design new landing page",
      description: "Create a new design for the company website landing page",
      dueDate: "2023-07-15",
      status: "todo",
    },
    {
      id: 4,
      title: "Implement new feature",
      description: "Add the new feature to the application",
      dueDate: "2023-08-01",
      status: "in progress",
    },
    {
      id: 5,
      title: "Write blog post",
      description: "Publish a new blog post on the company website",
      dueDate: "2023-06-20",
      status: "completed",
    },
  ]);
  const [editingTask, setEditingTask] = useState<TasksType | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const handleCreateTask = () => {
    if (editingTask) {
      const newId = Math.max(...tasks.map((task) => task.id), 0) + 1;
      const newTask: TasksType = {
        id: newId,
        title: editingTask.title || "",
        description: editingTask.description || "",
        dueDate: editingTask.dueDate || "",
        status: editingTask.status || "todo",
      };
      setTasks([...tasks, newTask]);
      setEditingTask(null);
    }
  };
  const handleEditTask = (task: TasksType) => {
    setEditingTask(task);
  };
  const handleUpdateTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTask?.id ? { ...task, ...editingTask } : task
      )
    );
    setEditingTask(null);
  };
  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleChangeStatus = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          const nextStatus = {
            todo: "in progress",
            "in progress": "completed",
            completed: "todo",
          }[task.status] as TasksType["status"];
          return { ...task, status: nextStatus };
        }
        return task;
      })
    );
  };
  const filteredTasks = useMemo(() => {
    if (activeTab === "all") {
      return tasks;
    }
    return tasks.filter((task) => {
      if (editingTask && task.id === editingTask.id) {
        return true;
      }
      return task.status === activeTab;
    });
  }, [tasks, editingTask, activeTab]);

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Task Management</h1>
      </header>
      <main className="flex-1 p-6 grid gap-6">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Tasks</h2>
            <Button
              onClick={() =>
                setEditingTask({
                  id: 0,
                  title: "",
                  description: "",
                  dueDate: "",
                  status: "todo",
                })
              }
            >
              <FaPlusCircle className="w-5 h-5 mr-2" />
              New Task
            </Button>
          </div>
          <div className="grid gap-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="todo">To Do</TabsTrigger>
                <TabsTrigger value="in progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value={activeTab}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>{task.title}</TableCell>
                        <TableCell>{task.description}</TableCell>
                        <TableCell>{task.dueDate}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              task.status === "todo"
                                ? "outline"
                                : task.status === "in progress"
                                  ? "outline"
                                  : "default"
                            }
                          >
                            {task.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {task.status === "completed" ? (
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => handleChangeStatus(task.id)}
                              >
                                <FaUndo className="w-5 h-5" />
                              </Button>
                            ) : (
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => handleChangeStatus(task.id)}
                              >
                                {task.status === "todo" ? (
                                  <TbProgressCheck className="w-5 h-5" />
                                ) : (
                                  <FaCheck className="w-5 h-5" />
                                )}
                              </Button>
                            )}
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => handleEditTask(task)}
                            >
                              <FaFilePen className="w-5 h-5" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => handleDeleteTask(task.id)}
                            >
                              <FaTrashAlt className="w-5 h-5" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        {editingTask && (
          <Card>
            <CardHeader>
              <CardTitle>{editingTask.id ? "Edit Task" : "New Task"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={editingTask.title}
                    onChange={(e) =>
                      setEditingTask({ ...editingTask, title: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={editingTask.description}
                    onChange={(e) =>
                      setEditingTask({
                        ...editingTask,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={editingTask.dueDate}
                    onChange={(e) =>
                      setEditingTask({
                        ...editingTask,
                        dueDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    data-id="status"
                    value={editingTask.status}
                    onValueChange={(value) =>
                      setEditingTask({ ...editingTask, status: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todo">To Do</SelectItem>
                      <SelectItem value="in progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2">
                <Button variant="ghost" onClick={() => setEditingTask(null)}>
                  Cancel
                </Button>
                <Button
                  onClick={editingTask.id ? handleUpdateTask : handleCreateTask}
                >
                  {editingTask.id ? "Update" : "Create"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        )}
      </main>
    </div>
  );
}
