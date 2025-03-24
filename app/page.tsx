import React from 'react'
import TodoInput from './(components)/todo'
import TodoList from './(components)/todo_list'

const Home = () => {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default Home
