import "./GameMode.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Field from "../Field/Field";
import HoverSquares from "../HoverSquares/HoverSquares";

export default function GameMode() {
  const [gameData, setGameData] = useState({});
  const [mode, setMode] = useState(null);
  const [rowAmount, setRowAmount] = useState(5);
  const [isSelected, setIsSelected] = useState(false);
  const [row, setRow] = useState(null);
  const [col, setCol] = useState(null);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!mode) {
      return;
    }
    setRowAmount(gameData[mode].field);
  }, [gameData, mode]);

  useEffect(() => {
    setTotal((prev) => [...prev, { row: row, col: col }]);
  }, [col, row]);

  async function getData() {
    try {
      const response = await axios.get("http://demo1030918.mockable.io/");
      setGameData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const onChange = (e) => {
    e.preventDefault();
    setMode(e.target.value);
    setIsSelected(false);
    setTotal([]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSelected(true);
  };

  const onRowChange = (value) => {
    setRow(value);
  };

  const onColChange = (value) => {
    setCol(value);
  };

  const gameModes = Object.keys(gameData);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <select onChange={onChange}>
          <option value="" disabled>
            Pick mode
          </option>
          {gameModes.map((mode, idx) => (
            <option key={idx} value={mode}>
              {mode}
            </option>
          ))}
        </select>
        <button type="submit">Start</button>
      </form>
      <div className="squares">
        {isSelected && (
          <Field rows={rowAmount} setRow={onRowChange} setCol={onColChange} />
        )}
        {isSelected && <HoverSquares total={total} />}
      </div>
    </div>
  );
}
