import * as ActionCreators from "../actionCreators/todoActionCreators";
import reducer from "./todoReducer";

describe("todo reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			nextTodoId: 2,
			visibilityFilter: "SHOW_ALL",
			todos: [
				{
					id: 1,
					text: "Todo 1",
					completed: false
				}
			]
		});
	});

	it("should handle ADD_TODO", () => {
		const state = reducer(undefined, ActionCreators.addTodo("Run the tests"));
		expect(state.todos.length).toBe(2);
		expect(state.nextTodoId).toBe(3);
		expect(state.todos[1]).toEqual({
			id: 2,
			text: "Run the tests",
			completed: false
		});
	});

	it("should handle TOGGLE_TODO", () => {
		const state = reducer(undefined, ActionCreators.toggleTodo(1));
		expect(state.todos[0].completed).toBe(true);
	});

	it("should handle SET_VISIBILITY_FILTER = SHOW_ALL", () => {
		const state = reducer(undefined, ActionCreators.setVisibilityFilter("SHOW_ALL"));
		expect(state.visibilityFilter).toBe("SHOW_ALL");
	});

	it("should handle SET_VISIBILITY_FILTER = SHOW_ACTIVE", () => {
		const state = reducer(undefined, ActionCreators.setVisibilityFilter("SHOW_ACTIVE"));
		expect(state.visibilityFilter).toBe("SHOW_ACTIVE");
	});

	it("should handle SET_VISIBILITY_FILTER = SHOW_COMPLETED", () => {
		const state = reducer([], ActionCreators.setVisibilityFilter("SHOW_COMPLETED"));
		expect(state.visibilityFilter).toBe("SHOW_COMPLETED");
	});
});
