export default function HoverSquares({ total }) {
  return (
    <div>
      <h1>Hover squares</h1>
      {total &&
        total.map((item, idx) => (
          <p key={idx}>
            row: {item.row} col: {item.col}
          </p>
        ))}
    </div>
  );
}
