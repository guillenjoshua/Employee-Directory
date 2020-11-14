import React, { Component } from "react";
import SearchInput from "./components/SearchInput"


class App extends Component {


  state = {
    employees: [],
};

  render(){

    return (

    <div>
      <h1>Stop Copying My Cheese!!</h1>
      <SearchInput />
    </div>

    );






  }
}
  export default App;
  