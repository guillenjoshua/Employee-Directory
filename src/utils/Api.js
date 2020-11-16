import axios from "axios";


const BASEURL = "https://randomuser.me/api/?results=15&nat=us";
// const APIKEY = "";

// eslint-disable-next-line
export default {
    employees: function(query) {
      return axios.get(BASEURL + query);
    }
  };
  