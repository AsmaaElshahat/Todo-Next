import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Nav from './components/Nav';


const App = () => {
  return (
    <>
      <Nav />
      <TodoInput />
      <TodoList />
    </>
  );

};
  
export default App;
