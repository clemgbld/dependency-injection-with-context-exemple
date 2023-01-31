import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import TodosServiceProvider from "./with-depency-injection/TodosServiceProvider";
import Todos from "./with-depency-injection/Todos";
import { todosService } from "./todos/todos-service";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodosServiceProvider todosService={todosService}>
      <Todos />
    </TodosServiceProvider>
  </React.StrictMode>
);
