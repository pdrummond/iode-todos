import { connect } from "react-redux";
import { toggleTodo } from "../actionCreators/todoActionCreators";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return todos;
		case "SHOW_COMPLETED":
			return todos.filter(t => t.completed);
		case "SHOW_ACTIVE":
			return todos.filter(t => !t.completed);
		default:
			return todos;
	}
};

const mapStateToProps = state => {
	const newState = {
		todos: getVisibleTodos(state.todos.todos, state.todos.visibilityFilter)
	};
	return newState;
};

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id));
		}
	};
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
