"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TodoInput = () => {

    const router = useRouter();

    const inputChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setTask((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // const [inputVal, setInputVal] = useState('');
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/Tasks", {
            method: "POST",
            body: JSON.stringify({task}),
            "content-type": "application/json"
        });

        if (!res.ok){
            console.log(res)
            throw new Error("Failed to create task");
        };

        router.refresh()
    }
    
    const startingTaskData = {
        title: "",
        completed: false,
    };

    const [task, setTask] = useState(startingTaskData);

    return (
        <div className='flex justify-center'>
            <div className='flex'>
                <input 
                    id='title'
                    name='title'
                    className='border border-gray-700 mr-2 px-4 py-2 flex-grow' 
                    type='text' 
                    placeholder='Enter a task here...'
                    value={task.title}
                    required={true}
                    onChange={inputChangeHandler}
                />
                <button 
                    className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4'
                    onClick={submitHandler}
                >
                    Add 
                </button>
            </div>
        </div>
    );
}

export default TodoInput;

// export default async function Todo() {

//   const client = await clientPromise;
//   const db = client.db("nextjs-mongodb-demo");

//   // const allPosts = await db.collection("allPosts").find({}).toArray();



//   const [todos, setTodo] = useState([]);
//   const [inputVal, setInputVal] = useState('');


//   const addTodoHandler = () => {
//     setTodo([...todos, inputVal]);
//     setInputVal('');
//   };

//   const deleteTodoHandler = (index) => {
//     const newTodo = todos.filter((_, i) => i != index);
//     setTodo(newTodo);
//   };

//   const todoItems = todos.map((todo, index) => {
//     return <li key={index} className='flex justify-between items-center mb-2'>
//       {todo}
//       <button
//         className='bg-red-700 text-white font-bold py-1 px-2'
//         onClick={() => deleteTodoHandler(index)}>
//         X
//       </button>
//     </li>
//   });

//   return (
//       <div className='mx-auto max-w-md'>
//         <h1 className='text-3xl font-bold mb-4'>Todo App</h1>
//         <div className='flex'>
//           <button 
//             className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4'
//             onClick={addTodoHandler}
//           >
//               Add 
//           </button>
//         </div>
//         <ul className='list-disc list-insite my-4'>
//           {todoItems}
//         </ul>
//       </div>
//   );
// }
