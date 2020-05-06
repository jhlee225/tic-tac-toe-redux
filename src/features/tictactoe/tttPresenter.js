import React from "react";
import Square from "./square";
function Presenter(props) {
  const { current, status, moves, handleChecked } = props.state;
  function renderSquare(i) {
    return <Square id={i} value={current.squares[i]} />;
  }
  return (
    <div className="game">
      <div className="game-board">
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
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
