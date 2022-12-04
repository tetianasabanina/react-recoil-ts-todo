import { useRecoilValue } from 'recoil';
import { todoContentState } from '../state/todoState';
import { TodoItem } from './TodoItem';
export function TodoList() {
	const todoList = useRecoilValue(todoContentState);
	return (
		<div>
			{todoList.map((item) => (
				<TodoItem {...item} key={item.id} />
			))}
		</div>
	);
}
