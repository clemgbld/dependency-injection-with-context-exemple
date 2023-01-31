import { rest } from "msw";
import { setupServer } from "msw/node";
import { expect, it, beforeAll, afterAll, afterEach } from "vitest";
import { todosService } from "../todos-service";
import { fetch } from "cross-fetch";

const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
];

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(ctx.json(todos));
  })
);

global.fetch = fetch;

beforeAll(() => {
  server.listen({ onUnhandledRequest: `error` });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

it("should get a list of todos", async () => {
  const result = await todosService.get();
  expect(result).toEqual(todos);
});
