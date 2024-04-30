import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "224adcc30c6c456791f57ce775433767",
  },
});
