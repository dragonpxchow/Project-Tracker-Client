import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import dotenv from "dotenv";

//  loads the env variables into the process.env
dotenv.config(); // from .env
dotenv.config({ path: ".env." + process.env.NODE_ENV }); // from custome env file eg: .env.development or .env.production etc

console.log("Application environment variables:", process.env.NODE_ENV);
console.log("REACT_APP_API_URL >>>>", process.env.REACT_APP_API_URL);

ReactDOM.render(<App />, document.getElementById("root"));

/*
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
*/
