import axios from "axios";

export default function fetchGameData() {
  return axios.get("http://demo1030918.mockable.io/");
}
