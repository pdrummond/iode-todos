import React from "react";
import renderer from "react-test-renderer";
import TodoList from "./TodoList";

describe("components", () => {
	describe("TodoList", () => {
		it("should render correctly", () => {
			const props = {
				todos: [
					{
						id: 1,
						text: "Todo 1",
						completed: false
					}
				],
				onTodoClick: jest.fn()
			};
			const tree = renderer.create(<TodoList {...props} />).toJSON();
			expect(tree).toMatchSnapshot();
		});
	});
});
