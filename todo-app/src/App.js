// src/App.js
import React from 'react';
import AddTask from './components/addTask';
import ListTask from './components/listTask';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;

