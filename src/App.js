import React from "react";
import Say from "./Say";

function App() {
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    padding: 16,
  };
  return (
    <>
      <h1 style={style}>Hello react</h1>
      <Say />
    </>
  );
}

export default App;
