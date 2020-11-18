import React from 'react';


const EmployeeRow = (props) => {

return (

    <tr>
        <td>
        <img src={props.employee.img} alt="" />
        </td>
        <td>{props.employee.firstName + " " + props.employee.lastName}</td>
        <td>{props.employee.cell}</td>
        <td>{props.employee.email}</td>
    </tr>
    
    )

}

const EmployeeColumns = (props) => {

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

        <tbody>
            { props.employees.map((e, i) => (
                <EmployeeRow employee={e} key={i} /> 
                ))}
        </tbody>

    </table>

  )

}

export default EmployeeColumns; 