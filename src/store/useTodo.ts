import { number } from 'framer-motion';
import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
  priority: number;
}

type TodoState = {
  todos : Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
  priorityTodo: (id: number, priority: number) => void;
}

let id = 0;
// khởi tạo useTodoStore với một kiểu dữ liệu là TodoState;
const useTodoStore = create<TodoState>()(
  //persist là middleware của zustand giúp lưu trạng thái vào localStorage. Nó sẽ nhận vào 2 tham số
  persist(
    // giống với setState của react
    (set) => ({
      // khởi tạo todos dạng []
      todos: [],
      // addTodo nhận vào giá trị text: string, setState cho todos bằng cách phân rã todos (lưu giá trị hiện tại và giá trị mới) và truyền vào kiểu dữ liêu type Todo
      addTodo: (text) => 
        set((state) => ({
          todos: [...state.todos,{id: id++, text, done: false, priority: 0}]
        })),
      // toggleTodo nhận vào id : number, setState cho todos bằng cách duyệt trong mảng todos và từ phần tử todo lấy giá trị id và so sánh nếu đúng thì sẽ thay đổi trạng
      // thái hiện tại, còn không sẽ k thay đổi gì hết
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) => 
            todo.id === id ? {...todo, done: !todo.done} : todo
          )
        })),
      // truyền vào id : number, hàm filter sẽ duyệt trong mảng todos và lấy hết id không trùng và cho vào 1 mảng mới (k lấy id trùng);
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => 
            todo.id !== id 
          )
        })),
      priorityTodo: (id, priority) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? {...todo, priority} : todo
          )
        })),
      updateTodo: (id, text) => 
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? {...todo, text} : todo
          )
        }))
    }),
    {
      // tên key trong localStorage
      name: 'todo-storage'
    }
  )
)

export default useTodoStore;