import React from "react";
import Square from "./square";
function Presenter(props) {
  const { current, status, moves, handleChecked } = props.state;
  const boardRows = ["A", "B", "C"];
  const boards = boardRows.map((row, rowNum) => makeBoard(row, rowNum));
  function makeBoard(row, rowNum) {
    const boardCols = [0, 1, 2];
    return (
      <div key={row}>
        <div className="board-row">
          {boardCols.map((col, colNum) => renderSquare(rowNum * 3 + colNum))}
        </div>
      </div>
    );
  }
  function renderSquare(i) {
    return <Square key={i} id={i} value={current.squares[i]} />;
  }
  return (
    <div className="game">
      <div className="game-board">{boards}</div>
      <div className="game-info">
        <div>
          <div>{status}</div>
          <label className="switch">
            <input type="checkbox" onChange={(e) => handleChecked(e)} />
            <span className="slider round"></span>
          </label>
        </div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// ========================================

export default Presenter;
