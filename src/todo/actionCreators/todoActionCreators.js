import * as Actions from "../actionTypes/todoActionTypes";

export function addTodo(text) {
	return { type: Actions.ADD_TODO, text };
}

export function toggleTodo(index) {
	return { type: Actions.TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
	return { type: Actions.SET_VISIBILITY_FILTER, filter };
}
