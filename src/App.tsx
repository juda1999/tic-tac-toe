import React, { useState } from 'react';
import Board from './components/Board';
import "./App.css";

export const App: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const calculateWinner = (squares: (string | null)[]): string | null => {
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
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  const handleClick = (index: number) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game">
      <div className="status">{status}</div>
      <Board squares={squares} onClick={handleClick} />
      {winner ?? <button className="reset" onClick={resetGame}>Restart Game</button>}
    </div>
  );
};
