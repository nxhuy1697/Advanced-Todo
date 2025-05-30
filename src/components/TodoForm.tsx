"use client";
import useTodoStore from '@/store/useTodo';
import React,{ useState } from 'react';
import { shallow } from 'zustand/shallow';

export default function TodoForm() {
const [value, setvalue] = useState("");

const todos = useTodoStore((state) => state.todos);
const addTodo = useTodoStore((state) => state.addTodo);
const toggleTodo = useTodoStore((state) => state.toggleTodo);
const removeTodo = useTodoStore((state) => state.removeTodo);
const priorityTodo = useTodoStore((state) => state.priorityTodo);
const updateTodo = useTodoStore((state) => state.updateTodo);

const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setvalue(e.target.value);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  addTodo(value.trim());
  setvalue("")
  console.log(value)
};


return (
  <>
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
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>
          {todo.text}
        </li>
      ))}
    </ul>
  </>
)
}
