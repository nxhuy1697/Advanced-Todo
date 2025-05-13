import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
   <div className="container mx-auto p-6">
    <h1 className="test-3xl mb-4">Todo List</h1>
    <AddTodoForm/>
    <TodoList/>
   </div>
  );
}
