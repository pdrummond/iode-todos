import getVisibleTodos from "./getVisibleTodos";

function setup() {
	return [
		{
			id: 1,
			text: "Todo 1",
			completed: false
		},
		{
			id: 2,
			text: "Todo 2",
			completed: true
		}
	];
}

describe("getVisibleTodos", () => {
	it("should return all todos when type is SHOW_ALL", () => {
		const todos = setup();
		expect(getVisibleTodos(todos, "SHOW_ALL")).toEqual(todos);
	});
	it("should return completed todos when type is SHOW_COMPLETED", () => {
		const todos = setup();
		expect(getVisibleTodos(todos, "SHOW_COMPLETED").length).toEqual(1);
	});
	it("should return completed todos when type is SHOW_ACTIVE", () => {
		const todos = setup();
		expect(getVisibleTodos(todos, "SHOW_ACTIVE").length).toEqual(1);
	});
});
