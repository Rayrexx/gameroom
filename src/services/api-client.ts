import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "be2f435469ca40cbb217805815215d7b",
  },
});
