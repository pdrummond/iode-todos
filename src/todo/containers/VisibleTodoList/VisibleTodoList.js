import { connect } from "react-redux";
import { toggleTodo } from "../../actionCreators/todoActionCreators";
import TodoList from "../../components/TodoList";
import getVisibleTodos from "./getVisibleTodos";

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
