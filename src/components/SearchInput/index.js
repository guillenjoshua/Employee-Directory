import React from "react";


function SearchBox({ value, handleInputChange}) {


    return (
        <form>
            
        <div className="container col-md-4 form-group">
            
            <form className="form-inline">
                <input
                value={value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search Employee Name"
                id="search"
                onChange={handleInputChange}
                />
                <br />
                {/* <button onClick={props.handleFormSubmit} className="btn btn-danger">Search</button> */}
            </form>
        </div>
        </form>
      );


}


export default SearchBox; 