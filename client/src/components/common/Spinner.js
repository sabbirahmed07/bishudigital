import React from "react";
import spin from "../../assets/img/spinner.gif";

const spinner = () => {
  return (
    <div>
      <img
        src={spin}
        alt="Loading.."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default spinner;
