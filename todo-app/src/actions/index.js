// src/actions/index.js
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    description,
  },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id,
  },
});
