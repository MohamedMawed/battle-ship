const Dots = ({
  count,
  crossedCount,
}: {
  count: number;
  crossedCount: number;
}) => {
  const dots = Array.from({ length: count }, (item, index) =>
    index < crossedCount ? (
      <span style={{ margin: 8 }}>X</span>
    ) : (
      <div className="dot" />
    )
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {dots}
    </div>
  );
};

interface Props {
  shipsData: any;
  clickedPositions: any;
}
export const Ships = ({ shipsData, clickedPositions }: Props) => {
  const ships: any[] = Object.keys(shipsData.shipTypes);
  const shipsDownCount = shipsData.layout.reduce(
    (result: any, shipData: any) => {
      let count = 0;

      shipData.positions.forEach((pos: [number, number]) => {
        if (clickedPositions?.[pos[0] * 10 + pos[1]]) count++;
      });

      return { ...result, [shipData.ship]: count };
    },
    {}
  );

  return (
    <div className="ships-section">
      {ships.map((ship) => (
        <div className="ship-row">
          <span className="ship-name">{ship}</span>
          <Dots
            count={shipsData.shipTypes[ship].size as number}
            crossedCount={shipsDownCount[ship]}
          />
        </div>
      ))}
    </div>
  );
};
