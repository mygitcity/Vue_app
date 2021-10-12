import axios from "axios";

export default class HttpClient {

  static client = axios.create({
    baseURL: "http://localhost:3000/api/",
    responseType: "json",
    headers: {
      Accept: "application/json",
    }
  });
  
}