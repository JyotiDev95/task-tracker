import { Task } from './TaskTracker';

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TaskList = ({ tasks, onToggle, onDelete }: TaskListProps) => {
  if (tasks.length === 0) return <p className="text-gray-500">No tasks yet.</p>;

  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <li key={task.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.title}</span>
          </div>
          <button onClick={() => onDelete(task.id)} className="text-red-500 hover:text-red-700">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

