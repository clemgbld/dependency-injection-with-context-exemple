import { describe, it, expect } from "vitest";
import { render, waitFor, screen } from "@testing-library/react";
import { buildInMemoryTodosService } from "../../todos/in-memory-todos-service";
import TodosServiceProvider from "../TodosServiceProvider";
import Todos from "../Todos";

describe("Todos", () => {
  it("should retrieve a list of todos and display their titles", async () => {
    render(
      <TodosServiceProvider todosService={buildInMemoryTodosService()}>
        <Todos />
      </TodosServiceProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("delectus aut autem")).toBeInTheDocument();
    });

    expect(
      screen.getByText("quis ut nam facilis et officia qui")
    ).toBeInTheDocument();
  });
});
