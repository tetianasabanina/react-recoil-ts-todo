import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoContentState } from "../state/todoState";
import { nanoid } from "nanoid";
import { TodoContent } from "../types";
export function AddTodo() {
	const [content, setContent] = useState<Omit<TodoContent, "id">>({
		description: "",
		title: "",
		completed: false,
	});
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
		setContent((prev) => ({ ...prev, [e.target.id]: e.target.value }));

	const setTodos = useSetRecoilState(todoContentState);

	const addTodo: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		setTodos((todos) => [...todos, { ...content, id: nanoid() }]);
		setContent({
			description: "",
			title: "",
			completed: false,
		});
	};

	return (
		<form onSubmit={addTodo}>
			<input
				onChange={handleChange}
				value={content.title}
				id="title"
				required
				placeholder="title"
			/>
			<input
				onChange={handleChange}
				value={content.description}
				id="description"
				placeholder="description"
			/>
			<button type="submit" disabled={!content.title}>
				Add Todo
			</button>
		</form>
	);
}
