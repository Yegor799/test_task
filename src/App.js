import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [gameData, setGameData] = useState(false);

  async function getData() {
    try {
      const response = await axios.get("http://demo1030918.mockable.io/");
      setGameData(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const { data } = gameData;

  console.log(data.easyMode.field);

  const mouseEnter = (e) => {
    console.log(e.target.classList[1]);
    e.target.classList[1] === "isActive"
      ? e.target.classList.remove("isActive")
      : e.target.classList.add("isActive");
  };

  return (
    <>
      {/* <div onMouseEnter={mouseEnter}></div>
      <div onMouseEnter={mouseEnter}></div>
      <div onMouseEnter={mouseEnter}></div>
      */}

      <div className="field"></div>
    </>
  );
}

export default App;
