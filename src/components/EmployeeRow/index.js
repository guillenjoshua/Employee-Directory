import React from 'react';


// function EmployeeRow (props){

// return (

//     <tr>
//         {/* <td>
//         <img src={props.employee.img} alt="" />
//         </td>
//         <td>{props.employee.firstName + " " + props.employee.lastName}</td>
//         <td>{props.employee.cell}</td>
//         <td>{props.employee.email}</td> */}
//     </tr>
    
// )


function EmployeeColumns (props) {

  return (

    <table className="table">
        <thead className="col-names">
            <tr>
                <th scope="col"> </th>
                <th scope="col">Name: </th>
                <th scope="col">Cell: </th>
                <th scope="col">Email: </th>
            </tr>
        </thead>
    </table>

  )

}



// }


export default EmployeeColumns; 