import React from "react";
import { connect } from "react-redux";
import { handleClick } from "./tttSlice";

function Square(props) {
  const { id, value, history, stepNumber, xIsNext, handleClick } = props;
  function squareClick(i) {
    const temp = history.slice(0, stepNumber + 1);
    const current = temp[temp.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);

    if (winner || squares[i.target.id]) {
      return;
    }
    squares[i.target.id] = xIsNext ? "X" : "O";
    const state = {
      history: temp.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !xIsNext,
    };
    handleClick({ state: state });
  }
  return (
    <button className="square" id={id} onClick={(e) => squareClick(e)}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function mapStateToProps(state) {
  return {
    history: state.ttt.history,
    stepNumber: state.ttt.stepNumber,
    xIsNext: state.ttt.xIsNext,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: ({ state }) => dispatch(handleClick({ state })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
