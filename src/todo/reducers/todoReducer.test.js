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
		const state = reducer(undefined, { type: "ADD_TODO", text: "Run the tests" });
		expect(state.todos.length).toEqual(2);
		expect(state.nextTodoId).toEqual(3);
		expect(state.todos[1]).toEqual({
			id: 2,
			text: "Run the tests",
			completed: false
		});
	});
});
