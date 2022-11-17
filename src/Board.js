
import React from "react";
import Square from "./Square";


function Board() {
  const [player, setPlayer] = React.useState('O');
  const move_template = {
    square0: '', square1: '', square2: '',
    square3: '', square4: '', square5: '',
    square6: '', square7: '', square8: '',
  };

  const [winner, setWinner] = React.useState(null);
  const [playerMoves, setPlayerMoves] = React.useState(move_template);


  const [firstPlayerMoves, setFirstPlayerMoves] = React.useState(move_template);

  const [secondPlayerMoves, setSecondPlayerMoves] = React.useState(move_template);


  const handleSquareClick = (e) => {
    e.preventDefault();

    if (winner) {
      alert("The game is over, to restart the game press Reset");
      return;
    }

    if (playerMoves[`square${e.target.dataset.id}`]) {
      alert("you cannot overwrite!");
      return;
    }

    const newFirstPlayerMoves = { ...firstPlayerMoves };
    const newSecondPlayerMoves = { ...secondPlayerMoves };
    const newPlayerMoves = { ...playerMoves };

    newPlayerMoves[`square${e.target.dataset.id}`] = player;
    setPlayerMoves(newPlayerMoves);
    player === 'O' ? setPlayer('X') : setPlayer('O');

    if (player == 'O') {
      newFirstPlayerMoves[`square${e.target.dataset.id}`] = player;
      setFirstPlayerMoves(newFirstPlayerMoves);
    }

    if (player == 'X') {
      newSecondPlayerMoves[`square${e.target.dataset.id}`] = player;
      setSecondPlayerMoves(newSecondPlayerMoves);
    }

    const first = Object.values(newFirstPlayerMoves);
    const second = Object.values(newSecondPlayerMoves);

    if (
      (
        (first[0] == 'O' && first[1] == 'O' && first[2] == 'O')
        ||
        (first[3] == 'O' && first[4] == 'O' && first[5] == 'O')
        ||
        (first[6] == 'O' && first[7] == 'O' && first[8] == 'O')
        ||
        (first[0] == 'O' && first[3] == 'O' && first[6] == 'O')
        ||
        (first[1] == 'O' && first[4] == 'O' && first[7] == 'O')
        ||
        (first[2] == 'O' && first[5] == 'O' && first[8] == 'O')
        ||
        (first[0] == 'O' && first[4] == 'O' && first[8] == 'O')
        ||
        (first[2] == 'O' && first[4] == 'O' && first[6] == 'O')
      )
    ) {
      setWinner('O');
    }

    if (
      (
        (second[0] == 'X' && second[1] == 'X' && second[2] == 'X')
        ||
        (second[3] == 'X' && second[4] == 'X' && second[5] == 'X')
        ||
        (second[6] == 'X' && second[7] == 'X' && second[8] == 'X')
        ||
        (second[0] == 'X' && second[3] == 'X' && second[6] == 'X')
        ||
        (second[1] == 'X' && second[4] == 'X' && second[7] == 'X')
        ||
        (second[2] == 'X' && second[5] == 'X' && second[8] == 'X')
        ||
        (second[0] == 'X' && second[4] == 'X' && second[8] == 'X')
        ||
        (second[2] == 'X' && second[4] == 'X' && second[6] == 'X')
      )
    ) {
      setWinner('X');
    }

  }


  const handleResetClick = (e) => {
    e.preventDefault();
    setPlayerMoves(move_template);
    setFirstPlayerMoves(move_template);
    setSecondPlayerMoves(move_template);
    setWinner(null);
  }


  return (
    <div className="board">
      <h1 className="title">Tic Tac Toe - React!</h1>
      {
        (!winner ? (
          <h3 className="subtitle">Next player: {player}</h3>
        ) : (
          <h3 className="subtitle">Winner: {winner}</h3>
        ))
      }

      <div className="content">
        <div className="row">
          <Square
            id={0}
            value={playerMoves.square0}
            handleSquareClick={handleSquareClick}
          />
          <Square
            id={1}
            value={playerMoves.square1}
            handleSquareClick={handleSquareClick}
          />
          <Square
            id={2}
            value={playerMoves.square2}
            handleSquareClick={handleSquareClick}
          />
        </div>


        <div className="row">
          <Square
            id={3}
            value={playerMoves.square3}
            handleSquareClick={handleSquareClick}
          />
          <Square
            id={4}
            value={playerMoves.square4}
            handleSquareClick={handleSquareClick}
          />
          <Square
            id={5}
            value={playerMoves.square5}
            handleSquareClick={handleSquareClick}
          />
        </div>

        <div className="row">
          <Square
            id={6}
            value={playerMoves.square6}
            handleSquareClick={handleSquareClick}
          />
          <Square
            id={7}
            value={playerMoves.square7}
            handleSquareClick={handleSquareClick}
          />
          <Square
            id={8}
            value={playerMoves.square8}
            handleSquareClick={handleSquareClick}
          />
        </div>


      </div>
      <button
        onClick={handleResetClick}
        className="button reset">Reset</button>
    </div>)

}

export default Board;