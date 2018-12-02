import React, { useState } from 'react';

const Tasks = ({ index, task, removeTask }) => {
  return (
    <li>
      {task} <button onClick={() => removeTask(index)}>X</button>
    </li>
  );
};

const TodoForm = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleSumbit = e => {
    e.preventDefault();
    if (!input) return;
    addTask(input);
    setInput('');
    return;
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        placeholder="Add new task..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </form>
  );
};

const Todo = () => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);

  const addTask = input => {
    const newTasks = [...tasks, input];
    setTasks(newTasks);
    return;
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <div>
        {tasks.map((task, index) => (
          <Tasks
            key={index}
            index={index}
            task={task}
            removeTask={removeTask}
          />
        ))}
      </div>
      <TodoForm addTask={addTask} />
    </>
  );
};

export default Todo;
