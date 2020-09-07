import axios from "../../node_modules/axios";

export default {
  sendMail: function (data) {
    console.log("API hit");
    return axios.post("/api/contact", data);
  },
};
