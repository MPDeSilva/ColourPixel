import React from "react";
import "./index.css";

const Square = ({ colour, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colour,
        color: isDarkText ? "black" : "white",
      }}
    >
      <p>{colour ? colour : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colour: "Empty Value",
};

export default Square;
