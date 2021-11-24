import React, { Component } from "react";

class Counter extends Component {
  // state의 초기값 설정
  state = {
    number: 0,
    fixNumber: 0,
  };

  render() {
    const { number, fixNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log("누름");
            });
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}

export default Counter;
