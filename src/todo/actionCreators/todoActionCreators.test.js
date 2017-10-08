import * as ActionCreators from "./todoActionCreators";

describe("action creators", () => {
	it("should create an action to add a todo", () => {
		const text = "Finish docs";
		const expectedAction = {
			type: "ADD_TODO",
			text
		};
		expect(ActionCreators.addTodo(text)).toEqual(expectedAction);
	});
});
