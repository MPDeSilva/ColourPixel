import React from "react";
import { useState } from "react";
import "./index.css";
import Square from "./Square";
import ColourInput from "./ColourInput";

function App() {
  const [colour, setColour] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Colour Pixel</h1>
      </header>
      <main>
        <Square colour={colour} hexValue={hexValue} isDarkText={isDarkText} />
        <ColourInput
          colour={colour}
          setColour={setColour}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
        />
      </main>
    </div>
  );
}

export default App;
