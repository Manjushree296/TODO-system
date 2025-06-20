import { useState, useEffect } from 'react';
import './App.css';
import api from './api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    api.get('/').then(res => setTodos(res.data));
  };

  const deleteTodo = async (id) => {
    try {
      await api.delete(`/${id}`);
      fetchTodos();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const toggleCompleted = async (id, completed) => {
    try {
      await api.put(`/${id}`, { completed });
      fetchTodos();
    } catch (err) {
      console.error('Toggle error:', err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm onTodoAdded={fetchTodos} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleCompleted} />
    </div>
  );
}

export default App;
