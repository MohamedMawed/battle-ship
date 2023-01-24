const COLUMNS_COUNT = 10;

interface Props {
  onClickGridCell: (position: [number, number]) => void;
  clickedPositions: any;
}
export const MatrixGrid = ({ onClickGridCell, clickedPositions }: Props) => {
  return (
    <div className="App">
      <div className="grid-container">
        {Array.from({ length: COLUMNS_COUNT * COLUMNS_COUNT }).map(
          (item, index) => (
            <div
              className="grid-item"
              onClick={() =>
                onClickGridCell([
                  Math.floor(index / COLUMNS_COUNT),
                  index % COLUMNS_COUNT,
                ])
              }
            >
              {clickedPositions?.[index] && (
                <span
                  style={{
                    fontWeight: "bolder",
                    fontSize: 22,
                    color:
                      clickedPositions?.[index] === "SHIP" ? "red" : "black",
                  }}
                >
                  X
                </span>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};
