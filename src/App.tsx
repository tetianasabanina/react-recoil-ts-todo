import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import "./App.css";

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};
export default App;
