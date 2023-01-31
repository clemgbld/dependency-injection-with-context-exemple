import { TodosService } from "./todo";

export const todosService: TodosService = {
  get: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data;
  },
};
