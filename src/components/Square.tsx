import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  // Determine the image source based on the value
  const renderContent = () => {
    if (value === 'X') {
      return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_x.svg/600px-Red_x.svg.png" alt="X" className='image'
     />;
    } else if (value === 'O') {
      return <img src="https://images.ctfassets.net/cnu0m8re1exe/2q9faCtEKBw41JgsRhLngs/09bb62cd310d5058d7a6eac1ffc99ff1/circle.jpg" className='image' alt="O" />;
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
