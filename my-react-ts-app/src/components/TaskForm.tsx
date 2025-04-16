
import { useState } from 'react';

type TaskFormProps = {
  onAdd: (title: string) => void;
};

const TaskForm = ({ onAdd }: TaskFormProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter a task..."
        className="flex-1 p-2 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
};

export default TaskForm;