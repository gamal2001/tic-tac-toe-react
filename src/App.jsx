import "./App.css";
import { useState } from "react";
const EMPTY = "EMPTY";
const CIRCLE = "CIRCLE";
const CROSS = "CROSS";
function TicTacToe() {
  const [state, setState] = useState({
    player: CIRCLE,
    positions: Array(9).fill(EMPTY),
  });

  function takeTurn(position) {
    const positions = [...state.positions];
    positions[position] = state.player;
    setState({
      player: state.player === CIRCLE ? CROSS : CIRCLE,
      positions,
    });
  }
  return (
    <div className="grid">
      <Square position={0} value={state.positions[0]} takeTurn={takeTurn} />
      <Square position={1} value={state.positions[1]} takeTurn={takeTurn} />
      <Square position={2} value={state.positions[2]} takeTurn={takeTurn} />
      <Square position={3} value={state.positions[3]} takeTurn={takeTurn} />
      <Square position={4} value={state.positions[4]} takeTurn={takeTurn} />
      <Square position={5} value={state.positions[5]} takeTurn={takeTurn} />
      <Square position={6} value={state.positions[6]} takeTurn={takeTurn} />
      <Square position={7} value={state.positions[7]} takeTurn={takeTurn} />
      <Square position={8} value={state.positions[8]} takeTurn={takeTurn} />
    </div>
  );
}

function Square({ position, value, takeTurn }) {
  function handleClick() {
    if (value === EMPTY) {
      takeTurn(position);
    }
  }
  return (
    <div className="square" onClick={handleClick}>
      {value === CIRCLE && <Circle />}
      {value === CROSS && <Cross />}
    </div>
  );
}

function Circle() {
  return (
    <svg width="100" height="100" viewBox="-50 -50 100 100" className="circle">
      <circle cx="0" cy="0" r="40" />
    </svg>
  );
}

function Cross() {
  return (
    <svg width="100" height="100" viewBox="-50 -50 100 100" className="cross">
      <line x1="-40" y1="-40" x2="40" y2="40" />
      <line x1="-40" y1="40" x2="40" y2="-40" />
    </svg>
  );
}

function Result() {
  return (
    <div>
      <h1>Result</h1>
    </div>
  );
}

export default TicTacToe;
