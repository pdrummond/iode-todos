import * as ActionCreators from "./todoActionCreators";

/*
	This is an example to demonstrate action creator testing, but
	imo it's a pretty redundant test as action creators are so simple.

	It's better to test action creators by using them when testing your
	reducer.

	Of course, this only applies to simple object-only action creators.  If your
	action creator has any logic, then that logic should be tested here.
*/
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
