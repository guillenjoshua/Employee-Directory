import axios from "axios";


const BASEURL = "https://randomuser.me/api/?nat=us";
// const APIKEY = "";


export default {
    search: function(query) {
      return axios.get(BASEURL + query);
    }
  };
  