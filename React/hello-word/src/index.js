/* eslint-disable react/style-prop-object */
//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// function getButtonText() {
//   return "Click Me!";
// }

//Create a react component
const App = function() {
  const buttonText = "Click Me!";
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
        {/* {getButtonText()} */}
      </button>
    </div>
  );
};

//Take the react component and show it onde the screen
ReactDOM.render(<App />, document.querySelector("#root"));
