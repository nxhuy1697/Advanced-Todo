import React from 'react';
import { Todo } from '@/types/todo';
import { motion } from 'framer-motion';
import { Checkbox } from '@radix-ui/themes';

interface TodoItemProps {
  todo: Todo;
  onToggle: VoidFunction;
  onDelete: VoidFunction;
}

export default function TodoItem({todo, onToggle, onDelete} : TodoItemProps) {
  return (
    <motion.div
      className="flex justify-between items-center p-4 border-b"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
       <div className="flex items-center">
        <Checkbox checked={todo.completed} onCheckedChange={onToggle} />
        <span className={`ml-2 ${todo.completed ? 'line-through' : ''}`}>
          {todo.title}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700"
      >
        Xóa
      </button>
    </motion.div>
  )
}
