import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import "./styles.css"

const App = () => {
  return (
    <div className="wrapper">
      <Nav />
      <TodoInput />
      <TodoList />
    </div>
  );

};
  
export default App;
