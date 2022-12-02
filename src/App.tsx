import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { TodoStatus } from "./components/TodoStatus";

import "./App.css";

const App = () => {
  return (
    <div>
      <TodoStatus />
      <AddTodo />
      <TodoList />
    </div>
  );
};
export default App;
