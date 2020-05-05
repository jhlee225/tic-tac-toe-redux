import React from "react";
import TTT from "./tttPresenter";
import { connect } from "react-redux";
import { jumpTo, handleHistory, deleteSelected } from "./tttSlice";

function Game(props) {
  const { history, stepNumber, xIsNext, winner, selected } = props;
  const { handleHistory, jumpTo, deleteSelected } = props;
  const current = history[stepNumber];
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => {
            jumpTo({ move: move });
            deleteSelected({ move: move });
            handleHistory({ history: history.slice(0, move + 1) });
          }}
        >
          {desc}
        </button>
        <span> {selected[move]} </span>
      </li>
    );
  });

  let status;
  status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  const state = {
    status: status,
    moves: moves,
    current: current,
  };

  return <TTT state={state} />;
}

// ========================================

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
    jumpTo: ({ move }) => dispatch(jumpTo({ move })),
    deleteSelected: ({ move }) => dispatch(deleteSelected({ move })),
    handleHistory: ({ history }) => dispatch(handleHistory({ history })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
