import axios from 'axios';
import type {Todo} from '../types/todo';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
  throw new Error('❌ Biến môi trường NEXT_PUBLIC_API_URL chưa được định nghĩa');
}

export const fetchTodos = () => axios.get<Todo[]>(BASE_URL);

export const addTodo = (todo: Omit<Todo, 'id'>) => axios.post(BASE_URL, todo);

export const deleteTodo = (id: number) => axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);

export const updateTodo = (id: number, updates: Partial<Todo>) => axios.patch(`${`${process.env.NEXT_PUBLIC_API_URL}`}/${id}`, updates);
 