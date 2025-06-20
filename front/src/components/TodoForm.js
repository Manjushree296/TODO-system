import React, { useState } from 'react';
import api from '../api';

function TodoForm({ onTodoAdded }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/', { title });
      setTitle('');
      onTodoAdded();
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add a task"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
