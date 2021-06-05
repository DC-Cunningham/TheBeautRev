import axios from "axios";

export default {
  sendMail: function (data) {
    return axios.post("/api/contact", data);
  },
};
