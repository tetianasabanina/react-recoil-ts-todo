import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todoCompleteState, todoContentState } from "../state/todoState";
import { TodoContent } from "../types";

const replaceItem = (arr: TodoContent[], id: string, newValue: TodoContent) => {
	const newArr = arr.map((obj) => {
		if (obj.id === id) return { ...newValue };
		else return obj;
	});
	return newArr;
};

export const TodoItem = (props: TodoContent) => {
	const { description, title, id, completed } = props;

	const [isComplete, setIsComplete] = useRecoilState(
		todoCompleteState(props.id)
	);

	const [todoList, setTodoList] = useRecoilState(todoContentState);

	/* another way to read and write an atom */
	// const todoList = useRecoilValue(todoContentState);
	// const setTodoList = useSetRecoilState(todoContentState);

	const toggleComplete = () => {
		setIsComplete((prevState) => !prevState);
		if (Array.isArray(todoList)) {
			const newList = replaceItem(todoList, id, {
				...props,
				completed: !completed,
			});
			setTodoList(newList);
		}
	};

	const deleteTodoItem = () =>
		setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));

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
				<button onClick={deleteTodoItem}>Delete</button>
			</div>
		</div>
	);
};
