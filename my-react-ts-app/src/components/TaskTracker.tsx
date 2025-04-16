  // components/TaskTracker.tsx
  import { useState, useEffect } from 'react';
  import TaskForm from './TaskForm';
  import TaskList from './TaskList';
  
  export interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  const LOCAL_STORAGE_KEY = 'task-tracker-tasks';

  const TaskTracker = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
  
    useEffect(() => {
      const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);
  
    const addTask = (title: string) => {
      const newTask: Task = {
        id: Date.now(),
        title,
        completed: false,
      };
      setTasks([newTask, ...tasks]);
    };
  
    const toggleTask = (id: number) => {
      setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };
  
    const deleteTask = (id: number) => {
      setTasks(tasks.filter(task => task.id !== id));
    };
  
    return (
      <div className="space-y-6">
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    );
  };
  
  export default TaskTracker;