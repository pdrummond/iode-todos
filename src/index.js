import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";
import todosReducer from "./todo/reducers/todoReducer";
import "./index.css";

const loggerMiddleware = createLogger({
	collapsed: true
});

const store = createStore(
	combineReducers({
		todos: todosReducer
	}),
	composeWithDevTools(applyMiddleware(loggerMiddleware))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

registerServiceWorker();
