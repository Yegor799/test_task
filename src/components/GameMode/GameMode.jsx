import axios from "axios";
import { useState, useEffect } from "react";

export default function GameMode() {
  const [gameData, setGameData] = useState({});

  async function getData() {
    try {
      const response = await axios.get("http://demo1030918.mockable.io/");
      setGameData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const gameModes = Object.keys(gameData);
  console.log(gameModes);
  return <div></div>;
}
