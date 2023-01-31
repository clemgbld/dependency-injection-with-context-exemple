import { Todo, TodosService } from "./todo";
import { todos } from "./todos-fixture";

export const buildInMemoryTodosService = (
  data: Todo[] = todos
): TodosService => ({
  get: () => Promise.resolve(data),
});
