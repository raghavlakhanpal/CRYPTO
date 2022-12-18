import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID n4mSl6rG0yC0iR6JPEY3C77gH83yzlT9pEoHDVBVpeU",
  }
});
