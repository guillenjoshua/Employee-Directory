import React from 'react';


const EmployeeRow = ({employee}) => {

return (

    <tr>
        <td>
        <img src={employee.img} alt="" />
        </td>
        <td>{employee.firstName + " " + employee.lastName}</td>
        <td>{employee.cell}</td>
        <td>{employee.email}</td>
    </tr>
    
    )

}

const EmployeeColumns = ({employees}) => {

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
            { employees.map((e, i) => (
                <EmployeeRow employee={e} key={i} /> 
                ))}
        </tbody>

    </table>

  )

}

export default EmployeeColumns; 