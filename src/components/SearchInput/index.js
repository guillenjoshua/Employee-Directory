import React from "react";


function SearchBox(props) {


    return (
        <form>
            
        <div className="container col-md-4 form-group">
            
            <form className="form-inline">
                <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Employee Name"
                id="search"
                />
                <br />
                <button onClick={props.handleFormSubmit} className="btn btn-danger">Search</button>
            </form>
        </div>
        </form>
      );


}


export default SearchBox; 