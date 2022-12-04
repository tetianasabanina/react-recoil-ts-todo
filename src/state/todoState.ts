import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import { TodoContent } from '../types';

export const todoContentState = atom<TodoContent[]>({
	key: 'todoContents',
	default: [],
});

export const todoCompleteState = atomFamily<boolean, string>({
	key: 'todoCompleteState',
	default: false,
});

export const infoValue = selector({
	key: 'infoValue',
	get: ({ get }) => ({
		total: get(todoContentState).length,
		completed: get(todoContentState).filter((todo) => todo.completed).length,
		notCompleted: get(todoContentState).filter((todo) => !todo.completed)
			.length,
	}),
});
