import React, { useState, useEffect } from 'react';


const getTodos = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tasks", {});
    
    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }
    
    return res.json();
  } catch (error) {
    console.log("Error loading tasks: ", error);
  }
};



const TodoList =  () => {

  const [data, setData] = useState({});
  useEffect(() => {
    async function getData () {
      const all_tasks = await getTodos();
      setData(all_tasks)
      console.log(data)
    };
    getData();
  },[]);
    
    // Make sure we have tickets needed for production build.
    if (!data?.tasks) {
        return <p>No Tasks.</p>;
    }
    const tasks = data.tasks;
    const todoItems = tasks.map((task, index) => {
        return <li key={index} className='flex justify-between items-center mb-2'>
            {task.title}
            <button
                className='bg-red-700 text-white font-bold py-1 px-2'
                // onClick={() => deleteTodoHandler(index)}
                >
                X
            </button>
            </li>
      });
    return (
        <div className='mx-auto max-w-md'>
            <ul className='list-disc list-insite my-4'>
                {todoItems}
            </ul>
        </div>
    )
}

export default TodoList;
