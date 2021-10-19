import React from "react";
import Counter from "./Counter";
import MyComponent from "./MyComponent";

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
      {/* <MyComponent name="React">뤼액트</MyComponent> */}
      <Counter />
    </>
  );
}

export default App;
