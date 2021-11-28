import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import GameMode from "./components/GameMode/GameMode";

function App() {
  const mouseEnter = (e) => {
    e.target.classList[1] === "isActive"
      ? e.target.classList.remove("isActive")
      : e.target.classList.add("isActive");
  };

  const rowAmount = 15;

  const buildField = () => {
    const rows = [];
    const squares = [];
    for (let i = 0; i < rowAmount; i++) {
      squares.push(
        <div
          className="square"
          key={i}
          id={i + 1}
          onMouseEnter={(e) => mouseEnter(e)}
        ></div>
      );
    }
    for (let k = 0; k < rowAmount; k++) {
      rows.push(
        <div className="row" id={k + 1} key={k}>
          {squares}
        </div>
      );
    }

    return rows;
  };
  return (
    <>
      <GameMode />
      <div className="field">{buildField()}</div>
    </>
  );
}

export default App;
