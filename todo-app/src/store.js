// src/store.js
import { createStore, combineReducers } from 'redux';
import tasksReducer from './reducers/taskReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

const store = createStore(rootReducer);

export default store;
