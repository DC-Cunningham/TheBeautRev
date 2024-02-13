import axios from "axios";

const API = {
  sendMail: function (data) {
    return axios.post("/api/contact", data);
  },
};

export default API;
