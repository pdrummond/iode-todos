import * as Actions from "../actionTypes/todoActionTypes";

export function addTodo(text) {
	return { type: Actions.ADD_TODO, text };
}

export function toggleTodo(id) {
	return { type: Actions.TOGGLE_TODO, id };
}

export function setVisibilityFilter(filter) {
	return { type: Actions.SET_VISIBILITY_FILTER, filter };
}
