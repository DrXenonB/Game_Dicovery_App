import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "da3d0f486db3460bacf7921a10bacb90",
  },
});
