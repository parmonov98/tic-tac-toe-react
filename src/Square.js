import React from "react";
const Square = ({ id, value, handleSquareClick }) => {
  return (
    <span onClick={handleSquareClick} data-id={id} className="cell">{value}</span>
  );
}

export default Square;