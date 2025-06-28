import React, { useState } from 'react';

function TodoForm({ onTodoAdded }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    await fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed: false })
    });
    setTitle('');
    onTodoAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 d-flex">
      <input
        type="text"
        className="form-control me-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
        required
      />
      <button className="btn btn-primary" type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
