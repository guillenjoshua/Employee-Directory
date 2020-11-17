import axios from "axios";


const BASEURL = "https://randomuser.me/api/?results=15&nat=us";

// export default {
//     employees: function(query) {
//       return axios.get(BASEURL + query);
//     }
//   };

// eslint-disable-next-line
  export default {
    employees: () => axios.get(BASEURL),
  };
  