import React, { useState, useEffect } from 'react';

const TodoInput = () => {

    // const router = useRouter();

    const inputChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setTask((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3000/api/Tasks", {
                method: "POST",
                body: JSON.stringify({task}),
                // "content-type": "application/json"
            });
    
            if (!res.ok){
                console.log(res)
                throw new Error("Failed to create task");
            };
        }catch (err) {
            throw new Error("Failed to create task");
        }

        // router.refresh()
    }

    // const [inputVal, setInputVal] = useState('');
    
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

