import axios from "axios";

export default {
  sendMail: function (data) {
    console.log("API hit");
    return axios.post("/api/contact", data);
  },
};
