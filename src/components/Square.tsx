import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  // Determine the image source based on the value
  const renderContent = () => {
    if (value === 'X') {
      return <img src="/x.png" alt="X" className="square-image" />;
    } else if (value === 'O') {
      return <img src="/o.png" alt="O" className="square-image" />;
    }
    return null; // No image if the square is empty
  };

  return (
    <button className="square" onClick={onClick}>
      {renderContent()}
    </button>
  );
};

export default Square;
