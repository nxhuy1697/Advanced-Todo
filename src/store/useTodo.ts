import {create} from 'zustand';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
}

type TodoState = {
  todos : Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}