"use client";
import { useCallback, useEffect, useState } from "react";
import { addTodo, deleteTodo, fetchTodos, updateTodo } from "@/lib/api";
import { Todo } from "@/types/todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState({status: 'all', priority: 'all'});

  //Fetch todos from API <LoadAllData>
  const loadTodos = useCallback(async () => {
    try {
      const response = await fetchTodos();
      console.log("🚀 ~ loadTodos ~ response:", response)
      setTodos(response.data);
    } catch (e) {
      console.error('failed to load todos', e);
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  // create new todo
  const createTodo = async (todo: Omit<Todo, 'id'>) => {
    try {
      const response = await addTodo(todo);
      setTodos((prev) => [...prev, response.data]);
    } catch (e) {
      console.error('failed to add todo', e);
    }
  };

  // Delete todo
  const removeTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (e) {
      console.error('failed to delete todo', e);
    }
  };

  //Update todo
  const toggleTodo = async (id: number, updates: Partial<Todo>) => {
    try {
      const response = await updateTodo(id, updates);
      setTodos((prev) => 
        prev.map((todo) => todo.id === id ? {...todo, ...response.data} : todo)
      );
    } catch (e) {
      console.error('failed to update todo', e);
    }
  };

  return { todos, filter, setFilter, createTodo, removeTodo, toggleTodo };
};