import React, { Component } from "react";
import API from "../utils/API";



class EmployeeContainer extends Component {

    state = {
        result: {},
        search: ""
      };



    searchEmployees = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };


      handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
      };



}


export default EmployeeContainer;