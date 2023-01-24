import React, { useEffect, useState } from "react";
import "./App.css";
import { MatrixGrid } from "./Grid";
import { Ships } from "./Ships";
import { gameData } from "./gameData";

function App() {
  const [clickedPositions, setClickedPositions] = useState({});

  const onClickGridCell = (position: [number, number]) => {
    const isShipPosition = gameData.layout.some((shipData) =>
      shipData.positions.some(
        (shipPosition) =>
          position[0] === shipPosition[0] && position[1] === shipPosition[1]
      )
    );

    setClickedPositions({
      ...clickedPositions,
      [position[0] * 10 + position[1]]: isShipPosition ? "SHIP" : "EMPTY",
    });
  };

  useEffect(() => {
    const shipsPositionsCount = gameData.layout.reduce(
      (counts, ship) => counts + ship.positions.length,
      0
    );

    if (
      shipsPositionsCount ===
      Object.values(clickedPositions).filter((value) => value === "SHIP").length
    ) {
      if (window.confirm("Game Over")) {
        setClickedPositions({});
      }
    }
  }, [clickedPositions]);
  return (
    <div className="container">
      <div className="game-container">
        <Ships shipsData={gameData} clickedPositions={clickedPositions} />
        <MatrixGrid
          onClickGridCell={onClickGridCell}
          clickedPositions={clickedPositions}
        />
      </div>
    </div>
  );
}

export default App;
