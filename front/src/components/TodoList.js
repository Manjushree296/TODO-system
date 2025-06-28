import React from 'react';

function TodoList({ todos, onDelete, onToggle }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo._id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo._id, todo.completed)}
              className="form-check-input me-2"
            />
            <span className={todo.completed ? "text-decoration-line-through" : ""}>
              {todo.title}
            </span>
          </div>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(todo._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
