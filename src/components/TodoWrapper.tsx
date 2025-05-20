import React from 'react';
import { Todo } from '@/types/todo';
import { motion } from 'framer-motion';
import { Checkbox } from '@radix-ui/themes';
import { div } from 'framer-motion/client';
import TodoForm from './TodoForm';


export default function TodoWrapper() {
  return (
    <div className='TodoWrapper'>
      <TodoForm/>
    </div>
  )
}
