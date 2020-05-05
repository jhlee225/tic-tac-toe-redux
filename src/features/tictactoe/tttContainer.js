import React from "react";
import TTT from "./tttPresenter";
import { connect } from "react-redux";
import { jumpTo, handleHistory } from "./tttSlice";

function Game(props) {
  const { history, stepNumber, xIsNext } = props;
  const { handleHistory, jumpTo } = props;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => {
            jumpTo({ move: move });
            handleHistory({ history: history.slice(0, move + 1) });
          }}
        >
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const state = {
    status: status,
    moves: moves,
    current: current,
  };

  return <TTT state={state} />;
}

// ========================================

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
    jumpTo: ({ move }) => dispatch(jumpTo({ move })),
    handleHistory: ({ history }) => dispatch(handleHistory({ history })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
