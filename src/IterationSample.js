import React, { useState } from "react";

const IterationSample = () => {
  /*
  const names = ["눈사람", "얼음", "눈", "바람"];
  // 리액트에서 key는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용한다.
  // key값은 언제나 유일해야한다.
  // 고유한 값이 없을 때만 index를 key값으로 사용. >> index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못함.
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  */
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = (e) => {
    const nextNames = names.concat({
      // 기존에 객체를 추가해서 나온 새로운 배열
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); // id +1
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
