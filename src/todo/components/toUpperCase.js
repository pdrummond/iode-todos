import React from "react";

const toUpperCase = WrappedComponent => {
	return class toUppercaseFunction extends React.Component {
		render() {
			const text = this.props.text.toUpperCase();
			return <WrappedComponent {...this.props} text={text} />;
		}
	};
};
export default toUpperCase;
