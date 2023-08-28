import React from "react";

import propTypes from "prop-types";

import { time } from "../index";

import { data } from "../index";

const Home = (props) => {
  const stop = () => {
    clearInterval(time);
  };

  const resume = () => {
    setInterval(data, 100);
  };

  return (
    <div className="bigcounter">
      <div className="calendar">
        <i className="fas fa-clock" />
      </div>
      <div className="four">{props.digitfour}</div>
      <div className="three">{props.digitthree}</div>
      <div className="two">{props.digittwo}</div>
      <div className="one">{props.digitone}</div>

      <button onClick={stop}>stop</button>
      <button onClick={resume}>resume</button>
    </div>
  );
};

Home.propTypes = {
  digitone: propTypes.number,
  digittwo: propTypes.number,
  digitthree: propTypes.number,
  digitfour: propTypes.number,
};
export default Home;
