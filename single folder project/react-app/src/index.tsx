import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style.css";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";

console.log(store);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
