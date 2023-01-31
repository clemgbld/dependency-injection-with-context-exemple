import { TodosService } from "../todos/todo";
import { createContext, FC, ReactNode } from "react";
import { todosService } from "../todos/todos-service";

export const TodosServiceContext = createContext(todosService);

type TodosServiceProps = {
  todosService: TodosService;
  children: ReactNode;
};

const TodosServiceProvider: FC<TodosServiceProps> = ({
  todosService,
  children,
}) => (
  <TodosServiceContext.Provider value={todosService}>
    {children}
  </TodosServiceContext.Provider>
);

export default TodosServiceProvider;
