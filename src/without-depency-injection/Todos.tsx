import { useEffect, useState } from "react";
import { Todo } from "../todos/todo";
import { todosService } from "../todos/todos-service";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const getTodos = async () => {
      const data = await todosService.get();
      setTodos(data);
    };
    getTodos();
  }, []);

  return (
    <div>
      {todos.map(({ title, id }) => (
        <span key={id}>{title}</span>
      ))}
    </div>
  );
};

export default Todos;
