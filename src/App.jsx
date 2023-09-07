import "./App.css";
const EMPTY = "EMPTY";
const CIRCLE = "CIRCLE";
const CROSS = "CROSS";
function TicTacToe() {
  const player = CIRCLE;
  const position = [
    EMPTY,
    EMPTY,
    EMPTY,
    CIRCLE,
    EMPTY,
    CROSS,
    EMPTY,
    EMPTY,
    EMPTY,
  ];
  return (
    <div className="grid">
      <Square position={0} value={position[0]} />
      <Square position={1} value={position[1]} />
      <Square position={2} value={position[2]} />
      <Square position={3} value={position[3]} />
      <Square position={4} value={position[4]} />
      <Square position={5} value={position[5]} />
      <Square position={6} value={position[6]} />
      <Square position={7} value={position[7]} />
      <Square position={8} value={position[8]} />
    </div>
  );
}

function Square({position,value}) {
  return (
  <div className='square'>
      {value === CIRCLE && <Circle/>}
      {value === CROSS && <Cross/>}
      
  </div>
);
}

function Circle() {
  return (
    <>
      <div>Circle</div>
    </>
  )
}

function Cross() {
  return (
    <>
      <div>Cross</div>
    </>
  )
}

function Result() {
  return (
  <div>
    <h1>Result</h1>
  </div>
);
}

export default TicTacToe;
