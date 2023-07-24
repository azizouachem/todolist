// src/reducers/tasksReducer.js
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actions';
import Task from '../models/Task';

const initialState = [];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = new Task(Date.now(), action.payload.description, false);
      return [...state, newTask];

    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
      );

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    default:
      return state;
  }
};

export default tasksReducer;
