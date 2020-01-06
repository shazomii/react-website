import axios from "axios";

const host = "http://localhost:3001";

const API = {
  login: (email, pass, success) => {
    axios
      .post(`${host}/api/users/login`, { email, password: pass })
      .then(res => {
        success(res);
      });
  }
};

export default API;
