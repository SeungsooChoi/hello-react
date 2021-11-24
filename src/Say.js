import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEvent = () => setMessage("하이요!");
  const onClickLeave = () => setMessage("바이요!");
  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEvent}>ㅎㅇ</button>
      <button onClick={onClickLeave}>ㅂㅇ</button>
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨강
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파랑
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        그린
      </button>
    </div>
  );
};

export default Say;
