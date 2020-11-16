import React, { Component } from "react";
import API from "../../utils/API";
import SearchInput from "../SearchInput"
import Wrapper from "../Wrapper";
import Header from "../Header";
import EmployeeRow from "../EmployeeRow"


class EmployeeContainer extends Component {

    state = {
        users: [],
      };

      componentDidMount() {
        this.searchEmployees();
      }

    searchEmployees = query => {
        API.employees(query)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
          console.log(query)
      };


      handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
      };


      render(){

        return (
    
        <div>
          <Wrapper>
          <Header />
          <SearchInput />
          <EmployeeRow />
          </Wrapper>
        </div>
        );
    
      }
    }



export default EmployeeContainer;