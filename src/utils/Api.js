import axios from "axios";


const BASEURL = "https://randomuser.me/api/?results=15&nat=us";


// eslint-disable-next-line
  export default {
    employees: () => axios.get(BASEURL),
  };
  