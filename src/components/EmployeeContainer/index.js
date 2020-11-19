import React, { Component } from "react";
import API from "../../utils/API";
import SearchInput from "../SearchInput"
import Wrapper from "../Wrapper";
import EmployeeRow from "../EmployeeRow";
import Header from "../Header";





class EmployeeContainer extends Component {

    state = {
        result: [],
      };


      componentDidMount() {
        this.searchEmployees();
      }

  

      searchEmployees = async (query) => {

            try{
            const response = await API.employees(query)
            console.log(response)

            const employeeInfo = response.data.results.map((e) => ({
                    img: e.picture.thumbnail,
                    lastName: e.name.last,
                    firstName: e.name.first,
                    cell: e.cell, 
                    email: e.email
                  }));

              this.setState({ result: employeeInfo })
            
          } catch(err) {console.log(err);         
        }
      };

   

      handleInputChange = event => {
        const value = event.target.value;
        // eslint-disable-next-line
        const name = event.target.name;
        this.setState({
          result: this.state.result.filter(e => e.firstName.includes(value)),
          // [name]: value
        });
      };

  

      handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.result);
      };


      employeeOrder = order => {
       
      }


      render(){

        return (
    
        <div>
          <Wrapper>
          <Header />
          <SearchInput 
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          />
          <EmployeeRow employees={this.state.result} />
          </Wrapper>
        </div>
        );
    
      }
    }



export default EmployeeContainer;
