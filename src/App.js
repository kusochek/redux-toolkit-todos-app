import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}
