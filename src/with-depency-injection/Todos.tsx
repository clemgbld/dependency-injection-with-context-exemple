import { Todo } from "../todos/todo";
import { useEffect, useState, useContext } from "react";
import { TodosServiceContext } from "./TodosServiceProvider";

const Todos = () => {
  const todosService = useContext(TodosServiceContext);
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
