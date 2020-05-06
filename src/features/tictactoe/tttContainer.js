import React from "react";
import TTT from "./tttPresenter";
import { connect } from "react-redux";
import {
  jumpTo,
  handleHistory,
  deleteSelected,
  handleToggle,
} from "./tttSlice";

function Game(props) {
  const { history, stepNumber, xIsNext, winner, selected, toggle } = props;
  const { handleHistory, jumpTo, deleteSelected, handleToggle } = props;
  const current = history[stepNumber];
  const reversedHistory = [];
  history.map((ele) => reversedHistory.unshift(ele));
  const moves = toggle
    ? reversedHistory.map((step, move) =>
        makeMoves(step, history.length - move - 1)
      )
    : history.map((step, move) => makeMoves(step, move));

  function makeMoves(step, move) {
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
  }

  let status;
  status = winner
    ? "Winner: " + winner.winner
    : history[stepNumber].squares.indexOf(null) < 0
    ? "Draw!"
    : "Next player: " + (xIsNext ? "X" : "O");
  function handleChecked(e) {
    handleToggle({ checked: e.target.checked });
  }
  const state = {
    status: status,
    moves: moves,
    current: current,
    handleChecked: handleChecked,
  };

  return <TTT state={state} />;
}

// ========================================

function mapStateToProps(state) {
  return {
    history: state.ttt.history,
    toggle: state.ttt.toggleChecked,
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
    handleToggle: ({ checked }) => dispatch(handleToggle({ checked })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
