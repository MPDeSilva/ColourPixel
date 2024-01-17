import React from "react";
import colorNames from "colornames";

const ColourInput = ({
  colour,
  setColour,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form className="searchColour" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="colourInput">Add Colour Name:</label>
      <input
        autoFocus
        required
        type="text"
        placeholder="Add Colour Name"
        value={colour}
        onChange={(e) => {
          setColour(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Colour
      </button>
    </form>
  );
};

export default ColourInput;
