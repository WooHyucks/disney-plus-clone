import axios from "axios";

const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params:{
    api_key: "f5c9466579ff5056015e48b3f40e7955",
    language: "ko-KR",
  }
})

export default instance