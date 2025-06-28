import React, { useEffect, useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function TodoPage() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch('http://localhost:5000/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/api/todos/${id}`, { method: 'DELETE' });
    fetchTodos();
  };

  const toggleCompleted = async (id, completed) => {
    await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed })
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="text-center text-primary mb-4">Todo List</h2>
        <TodoForm onTodoAdded={fetchTodos} />
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleCompleted} />
      </div>
    </div>
  );
}

export default TodoPage;
