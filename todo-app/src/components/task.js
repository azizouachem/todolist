// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
      <span
        style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
        onClick={handleToggleTask}
      >
        {task.description}
      </span>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default Task;
