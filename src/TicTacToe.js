import { useState } from "react";
import Button from "@mui/material/Button";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export function TicTacToe() {
  const [board, setboard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const decideWinner = (board) => {
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

    //if winning condition present in board then we have a winner.
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);

  const [isXturn, setIsXturn] = useState(true);

  const handleClick = (index) => {
    //copy the board and replace with 'X' in the clicked gamebox
    if (winner === null && board[index] === null) {
      const boardcopy = [...board];
      console.log(boardcopy, index);
      boardcopy[index] = isXturn ? "X" : "O";
      setboard(boardcopy);
      setIsXturn(!isXturn);
    }
  };
  const { width, height } = useWindowSize();
 
return (
    <div className="fullgame">
      {winner ? <Confetti width={width} height={height} gravity={0.01} /> : ""}
      <h1 className="title">Tic Tac Toe</h1>
      <WhomStart setIsXturn={setIsXturn} />

      {/* board box */}
      <div className="board">
        {board.map((val, index) => (
          <Gamebox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>

      {winner ? <h2>Winner is : {winner}</h2> : ""}
      <Button
        variant="contained"
        size="medium"
        onClick={() => {
          setboard([null, null, null, null, null, null, null, null, null]);
          // setisXturn(true);
        }}
      >
        Restart
      </Button>
    </div>
  );
}
function Gamebox({ val, onPlayerClick }) {
  // const [val,setval]=useState(null)
  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div onClick={() => onPlayerClick()} className="game-box" style={styles}>
      {val}
    </div>
  );
}
//Button variant="contained" size="medium"

function WhomStart({setIsXturn}) {
  
  return (
    <div>
      <h3>Whom to start the Game</h3>
      <div className="startbtn">
        <Button
          variant="contained"
          size="medium"
          onClick={() => {
            setIsXturn(true);
          }}
        >
          X
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="error"
          onClick={() => {
            setIsXturn(false);
          }}
        >
          O
        </Button>
      </div>
    </div>
  );
}
