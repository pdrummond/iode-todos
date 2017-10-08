import * as Actions from "../actionTypes/todoActionTypes";
import update from "immutability-helper";

const initialState = {
	nextTodoId: 2,
	visibilityFilter: "SHOW_ALL",
	todos: [
		{
			id: 1,
			text: "Todo 1",
			completed: false
		}
	]
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Actions.SET_VISIBILITY_FILTER:
			return update(state, {
				visibilityFilter: { $set: action.filter }
			});
		case Actions.ADD_TODO:
			return update(state, {
				todos: { $push: [{ id: state.nextTodoId, text: action.text, completed: false }] },
				nextTodoId: { $set: state.nextTodoId + 1 }
			});
		default:
			return state;
	}
}
