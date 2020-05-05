import React from "react";
import { connect } from "react-redux";
import { calculateWinner, handleClick } from "./tttSlice";

function Square(props) {
  const { winner, history, stepNumber, xIsNext, selected } = props;
  const { id, value, calculateWinner, handleClick } = props;
  function squareClick(i) {
    const temp = history.slice(0, stepNumber + 1);
    const current = temp[temp.length - 1];
    const squares = current.squares.slice();
    const rowCol = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
    calculateWinner({ squares });
    console.log(winner);
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
      selected: selected.concat([rowCol[i.target.id]]),
      stepNumber: history.length,
      xIsNext: !xIsNext,
    };
    handleClick({ state: state });
    calculateWinner({ squares });
  }
  return (
    <button className="square" id={id} onClick={(e) => squareClick(e)}>
      {value}
    </button>
  );
}

function mapStateToProps(state) {
  return {
    history: state.ttt.history,
    selected: state.ttt.selected,
    stepNumber: state.ttt.stepNumber,
    xIsNext: state.ttt.xIsNext,
    winner: state.ttt.winner,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: ({ state }) => dispatch(handleClick({ state })),
    calculateWinner: ({ squares }) => dispatch(calculateWinner({ squares })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
