import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { TodoContent } from "../types";

export const todoContentState = atom<TodoContent[]>({
	key: "todoContents",
	default: [],
});

// While keeping all the elements as objects in the element list atom,
// if one element’s position would change, all the elements would be re-rendered.
// But by using atomFamily, we only re-render the one element that changed.

export const todoCompleteState = atomFamily<boolean, string>({
	key: "todoCompleteState",
	default: false,
});

export const infoValue = selector({
	key: "infoValue",
	get: ({ get }) => ({
		total: get(todoContentState).length,
		completed: get(todoContentState).filter((todo) => todo.completed).length,
		notCompleted: get(todoContentState).filter((todo) => !todo.completed)
			.length,
	}),
});
