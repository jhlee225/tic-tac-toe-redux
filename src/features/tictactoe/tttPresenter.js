import React from "react";
import Square from "./square";
function Presenter(props) {
  const { current, status, moves } = props.state;
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
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// ========================================

export default Presenter;
