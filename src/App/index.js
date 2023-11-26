import { AppUi } from "./AppUi";
import "./App.scss";
import React from "react";
import { TodoProvider } from "../components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
