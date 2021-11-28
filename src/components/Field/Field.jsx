import "./Field.css";

export default function Field({ rows, setRow, setCol }) {
  const mouseEnter = (e) => {
    e.target.classList[1] === "isActive"
      ? e.target.classList.remove("isActive")
      : e.target.classList.add("isActive");
  };

  const rowAmount = rows;

  console.log(setRow);

  const onRowChange = (e) => {
    setRow(e.target.id);
  };

  const onColChange = (e) => {
    setCol(e.target.id);
  };

  const buildField = () => {
    const rows = [];
    const squares = [];
    for (let i = 1; i <= rowAmount; i += 1) {
      squares.push(
        <div
          className="square"
          key={i}
          id={i}
          onMouseEnter={(e) => mouseEnter(e)}
          onMouseOver={(e) => onColChange(e)}
        ></div>
      );
    }
    for (let j = 1; j <= rowAmount; j += 1) {
      rows.push(
        <div className="row" key={j} id={j} onMouseOver={(e) => onRowChange(e)}>
          {squares}
        </div>
      );
    }

    return rows;
  };

  return <div className="field">{buildField()}</div>;
}
