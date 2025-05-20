"use client";
import React,{ useState } from 'react';

export default function TodoForm() {
const [value, setvalue] = useState("");

const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setvalue(e.target.value);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

return (
  <form className='TodoForm' onSubmit={handleSubmit}>
    <input 
      type='text' 
      className='todo-input' 
      placeholder='What is the task today?' 
      onChange={handleOnchange}
    />
    <button 
      type='submit' 
      className='todo-btn'
    > 
      Add Task 
    </button>
  </form>
)
}
