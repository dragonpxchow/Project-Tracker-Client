import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log("Application environment variables:", process.env);

ReactDOM.render(<App />, document.getElementById("root"));

/*
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
*/
