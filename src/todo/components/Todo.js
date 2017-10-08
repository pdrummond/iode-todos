import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, onClick }) => {
	return <div onClick={onClick}>{text}</div>;
};

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Todo;