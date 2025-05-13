'use client';
import { useTodos } from '@/hooks/useTodo';
import React from 'react';
import TodoItem from './TodoItem';
import { motion } from 'framer-motion';


export default function TodoList() {
  const {todos, removeTodo, toggleTodo, filter, setFilter} = useTodos();
  const filteredTodos = todos.filter((todo) => {
    return (
      (filter.status === 'all' || todo.completed === (filter.status === 'done')) &&
      (filter.priority === 'all' || todo.priority === filter.priority)
    );
  });
  return (
    <div>
      <div className="flex justify-between mb-4">
        <button
          className="button-red"
          onClick={() => setFilter((prev) => ({ ...prev, status: 'all' }))}
        >
          Tất cả
        </button>
        <button
          className="p-2 border rounded"
          onClick={() => setFilter((prev) => ({ ...prev, status: 'done' }))}
        >
          Hoàn thành
        </button>
        <button
          className="p-2 border rounded"
          onClick={() => setFilter((prev) => ({ ...prev, status: 'active' }))}
        >
          Chưa làm
        </button>
      </div>

      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id, { completed: !todo.completed })}
            onDelete={() => removeTodo(todo.id)}
          />
        ))
      ) : (
        <motion.div
          className="text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Không có công việc nào!
        </motion.div>
      )}
    </div>
  )
}
 