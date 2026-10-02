import axios from "axios";

const API = {
  sendMail: function (data) {
    return axios.post(import.meta.env.VITE_CONTACT_API_URL, data);
  },
};

export default API;
