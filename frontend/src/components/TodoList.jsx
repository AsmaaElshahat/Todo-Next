import React, { useState, useEffect } from 'react';
import "../styles.css";

const TodoList =  () => {

  const [data, setData] = useState([]);

  const getTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/Tasks");
      const data = await res.json();
      setData(data);
      
      if (!res.ok) {
        throw new Error("Failed to fetch tasks");
      }
      
      // return res.json();
    } catch (error) {
      console.log("Error loading tasks: ", error);
    }
  };

  useEffect(() => {getTodos();},[]);

  const toggleTaskCompletion = async (taskId) => {
    try {
      const taskToUpdate = tasks.find(task => task._id === taskId);
      if (!taskToUpdate) return;
  
      const updatedStatus = !taskToUpdate.completed;
  
      const response = await fetch("http://localhost:3000/api/Tasks", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: taskId, completed: updatedStatus }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update task");
      }
  
      getTodos();
      
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  
  const deleteTask = async (id) => {
    try {
        const res = await fetch("http://localhost:3000/api/Tasks", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || "Failed to delete task");
      }
  
      alert("Task deleted successfully!");
      getTodos();
    } catch (error) {
      console.error("Error deleting task:", error);
      alert(error.message);
    }
  };
    
    // Make sure we have tickets needed for production build.
  if (!data?.tasks) {
      return <p>No Tasks.</p>;
  }
  
  const tasks = data.tasks;
  const todoItems = tasks.map((task) => {
    return <li key={task._id} className="todo_item">
      {/* {task.title} */}
      {/* <button className={`complete_btn ${task.completed ? "bg-green-500 text-white" : "bg-gray-300 text-white"}`} onClick={() => toggleTaskCompletion(task._id)} />
      <p style={task.completed ? { textDecoration: "line-through" } : {}}>
          {task?.title}
      </p> */}
      <div className="todo_items_left">
        <button className={`complete_btn ${task.completed ? "complete_btn_green" : "complete_btn_gray"}`} onClick={() => toggleTaskCompletion(task._id)} />
        <p style={task.completed ? { textDecoration: "line-through" } : {}}>
            {task?.title}
        </p>
      </div>
      <div className='todo_items_right'>
        <button
          className='edit-btn'
          // onClick={() => deleteTask(task._id)}
          >
          <svg x="0px" y="0px" width="30" height="30" viewBox="0 0 128 128" style={{fill:"#40C057"}}>
           <path d="M 79.335938 15.667969 C 78.064453 15.622266 76.775 15.762109 75.5 16.099609 C 72.1 16.999609 69.299609 19.199219 67.599609 22.199219 L 64 28.699219 C 63.2 30.099219 63.699609 32.000781 65.099609 32.800781 L 82.400391 42.800781 C 82.900391 43.100781 83.400391 43.199219 83.900391 43.199219 C 84.200391 43.199219 84.399219 43.199609 84.699219 43.099609 C 85.499219 42.899609 86.1 42.399219 86.5 41.699219 L 90.199219 35.199219 C 91.899219 32.199219 92.4 28.700781 91.5 25.300781 C 90.6 21.900781 88.400391 19.100391 85.400391 17.400391 C 83.525391 16.337891 81.455078 15.744141 79.335938 15.667969 z M 60.097656 38.126953 C 59.128906 38.201172 58.199219 38.724609 57.699219 39.599609 L 27.5 92 C 24.1 97.8 22.200781 104.30039 21.800781 110.90039 L 21 123.80078 C 20.9 124.90078 21.5 125.99961 22.5 126.59961 C 23 126.89961 23.5 127 24 127 C 24.6 127 25.199219 126.8 25.699219 126.5 L 36.5 119.40039 C 42 115.70039 46.7 110.8 50 105 L 80.300781 52.599609 C 81.100781 51.199609 80.599219 49.3 79.199219 48.5 C 77.799219 47.7 75.899609 48.199609 75.099609 49.599609 L 44.800781 102 C 41.900781 106.9 37.899609 111.20039 33.099609 114.40039 L 27.300781 118.19922 L 27.699219 111.30078 C 27.999219 105.60078 29.699609 100 32.599609 95 L 62.900391 42.599609 C 63.700391 41.199609 63.200781 39.3 61.800781 38.5 C 61.275781 38.2 60.678906 38.082422 60.097656 38.126953 z M 49 121 C 47.3 121 46 122.3 46 124 C 46 125.7 47.3 127 49 127 L 89 127 C 90.7 127 92 125.7 92 124 C 92 122.3 90.7 121 89 121 L 49 121 z M 104 121 A 3 3 0 0 0 101 124 A 3 3 0 0 0 104 127 A 3 3 0 0 0 107 124 A 3 3 0 0 0 104 121 z"></path>
          </svg>
        </button>
        <button
          className='delete-btn'
          onClick={() => deleteTask(task._id)}
          >
          X
        </button>
      </div>

    </li>
  });
  return (
    <div className='mx-auto max-w-md'>
        <ul className="todo_list">
            {todoItems}
        </ul>
    </div>
  )
}

export default TodoList;
