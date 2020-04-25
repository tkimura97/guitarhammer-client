import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

class APIservice {
  static async get(path) {
    try {
      const response = await axios.get(url + path);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async post(path, payload) {
    try {
      const response = await axios.post(url, payload);
    } catch (err) {
      console.log(err);
    }
  }

  static patch(path, payload) {}
  static delete(path) {}
}

export default APIservice;
