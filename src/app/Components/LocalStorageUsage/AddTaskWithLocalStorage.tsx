"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState, useEffect} from 'react';
import React from 'react'

type Todo = {
  id: string;
  text: string;
};

function AddTaskWithLocalStorage() {
    // Without LocalStorage.
    const [newtask,setnewtask]=useState("");
    const [tasklist,settasklist]=useState<Todo[]>([]);


    // Load todos from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      settasklist(JSON.parse(saved));
    }
  }, []);

  // Save todos to localStorage on update
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasklist)); // we need to convert arrays, object in order to store them - as local storege stores data only in stirng format
  }, [tasklist]);

    const handlenewtaskaddition=()=>{

        if(newtask.trim()=="") return;

        // cleaning the task - trim it and id - to differentiate them all
        const todo = {
            // id: Date.now(),
            id: crypto.randomUUID(), //avoid using date - as it makes- too frequent acces at the same time may not accept the new tasks
            text: newtask.trim(),
          };
      
          settasklist([...tasklist, todo]);
          setnewtask('');
    }

    const handledeletetask=(id:string)=>{

      // Filter out the todo that has the id that has been deleted.
      settasklist(tasklist.filter(task=>task.id!=id))
    }


  return (
    <div className='bg-white/30 rounded-2xl '>
      <div className='min-h-[500px] min-w-[500px] flex flex-col justify-center items-center gap-10 backdrop-blur-sm rounded-2xl'> 
        <h1 className='text-white text-2xl font-bold'>Todo With Local Storage</h1>
        <form className='flex justify-center items-center gap-4' onSubmit={(e) => { e.preventDefault(); handlenewtaskaddition(); }}>
            <Input className='bg-white' placeholder='Enter New Task' type="text" name="new_task"  onChange={(e) => setnewtask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handlenewtaskaddition()} ></Input>
            <Button className='bg-green-600 hover:bg-green-700' type='submit' onClick={handlenewtaskaddition}>Add</Button>
        </form>

        <div className='bg-white min-w-[300px] min-h-[300px] p-8 rounded-2xl'>
          {
          tasklist.length==0? "No Tasks right Now":
            (
            tasklist?.map(task=>(

            <div key={task.id} className='flex justify-between gap-4 border border-slate-300 rounded-sm p-2'>
              <p>{task.text}</p>
              <Button className="bg-red-500 hover:bg-red-500" onClick={()=>handledeletetask(task.id)}>Delete</Button>
            </div>
          )))
        }

        </div>
        </div>
    </div>
  )
}

export default AddTaskWithLocalStorage