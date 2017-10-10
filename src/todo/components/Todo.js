import React from "react";
import PropTypes from "prop-types";
import toUpperCase from "./toUpperCase";

const Todo = ({ text, onClick }) => {
	return (
		<div className="Todo" onClick={onClick}>
			{text}
		</div>
	);
};

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default toUpperCase(Todo);
