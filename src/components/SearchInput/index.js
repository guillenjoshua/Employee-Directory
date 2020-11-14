import React from "react";


function SearchBox(props) {


    return (
        <form>
            
        <div className="container col-md-4 form-group">
            <div>
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
                <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
            </div>
        </div>
        </form>
      );


}


export default SearchBox; 