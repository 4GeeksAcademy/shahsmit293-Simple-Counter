//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
const data = () => {
  const valueone = Math.floor(counter / 10).toString();
  const one = valueone.charAt(valueone.length - 1);

  const valuetwo = Math.floor(counter / 100).toString();
  const two = valuetwo.charAt(valuetwo.length - 1);

  const valuethree = Math.floor(counter / 1000).toString();
  const three = valuethree.charAt(valuethree.length - 1);

  const valuefour = Math.floor(counter / 10000).toString();
  const four = valuefour.charAt(valuefour.length - 1);
  counter++;
  ReactDOM.render(
    <Home digitone={one} digittwo={two} digitthree={three} digitfour={four} />,
    document.querySelector("#app")
  );
};
const time = setInterval(data, 100);

export { time, data };
