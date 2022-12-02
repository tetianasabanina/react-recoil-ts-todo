import { useRecoilState, useSetRecoilState } from "recoil";
import { todoCompleteState, todoContentState } from "../state/todoState";
import { TodoContent } from "../types";

export function TodoItem(props: TodoContent) {
  const { description, title, id } = props;
  const [isComplete, setIsComplete] = useRecoilState(
    todoCompleteState(props.id)
  );
  const setTodos = useSetRecoilState(todoContentState);
  const toggleComplete = () => setIsComplete((prevState) => !prevState);
  const deleteTodo = () =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  return (
    <div className="row">
      <div className="row item">
        <h3 className={isComplete ? "todo-completed" : ""}>{title}</h3>
        {description && (
          <p className={isComplete ? "todo-completed" : ""}>{description}</p>
        )}
      </div>

      <div>
        <button onClick={toggleComplete}>
          {isComplete ? "Not complete" : "Complete"}
        </button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
}
