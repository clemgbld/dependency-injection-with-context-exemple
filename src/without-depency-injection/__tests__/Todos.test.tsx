import { describe, it, afterEach, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Todos from "../Todos";
import { todos } from "../../todos/todos-fixture";
import { todosService } from "../../todos/todos-service";

describe("Todos", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("should retrieve a list of todos and display their titles", async () => {
    render(<Todos />);
    vi.spyOn(todosService, "get").mockResolvedValue(todos);

    await waitFor(() => {
      expect(screen.getByText("delectus aut autem")).toBeInTheDocument();
    });

    expect(
      screen.getByText("quis ut nam facilis et officia qui")
    ).toBeInTheDocument();
  });
});
