// import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import EmployeeService from '../services/EmployeeService'

// const ListEmployeeComponent = () => {

//     const [employees, setEmployees] = useState([])

//     useEffect(() => {

//         getAllEmployees();
//     }, [])

//     const getAllEmployees = () => {
//         EmployeeService.getAllEmployees().then((response) => {
//             setEmployees(response.data)
//             console.log(response.data);
//         }).catch(error =>{
//             console.log(error);
//         })
//     }

//     const deleteEmployee = (employeeId) => {
//        EmployeeService.deleteEmployee(employeeId).then((response) =>{
//         getAllEmployees();

//        }).catch(error =>{
//            console.log(error);
//        })
        
//     }

//     return (
//         <div className = "container">
//             <h2 className = "text-center"> List Employees </h2>
//             <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link>
//             <table className="table table-bordered table-striped">
//                 <thead>
//                     <th> Id </th>
//                     <th> First Name </th>
//                     <th> Last Name </th>
//                     <th> Email Id </th>
//                     <th> Actions </th>
//                 </thead>
//                 <tbody>
//                     {
//                         employees.map(
//                             employee =>
//                             <tr key = {employee.id}> 
//                                <td>{employee.id}</td>
//                                <td>{employee.firstName}</td>
//                                <td>{employee.lastName}</td>
//                                <td>{employee.email}</td>
//                                 <td>
//                                     <Link className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</Link>
//                                     <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
//                                     style = {{marginLeft:"10px"}}> Delete</button>
//                                 </td>
//                             </tr>
//                         )
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default ListEmployeeComponent  

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import EmployeeService from '../services/EmployeeService';

// const ListEmployeeComponent = () => {
//     const [employees, setEmployees] = useState([]);

//     useEffect(() => {
//         getAllEmployees();
//     }, []);

//     const getAllEmployees = () => {
//         EmployeeService.getAllEmployees()
//             .then((response) => {
//                 console.log("Fetched employees:", response.data);
//                 setEmployees(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching employees:", error);
//             });
//     };

//     const deleteEmployee = (employeeId) => {
//         EmployeeService.deleteEmployee(employeeId)
//             .then((response) => {
//                 console.log("Employee deleted:", employeeId);
//                 getAllEmployees(); // Refresh employee list
//             })
//             .catch((error) => {
//                 console.error("Error deleting employee:", error);
//             });
//     };

//     return (
//         <div className="container">
//             <h2 className="text-center">List Employees</h2>
//             <Link to="/add-employee" className="btn btn-primary mb-2">
//                 Add Employee
//             </Link>
//             <table className="table table-bordered table-striped">
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {employees.map((employee) => (
//                         <tr key={employee.id}>
//                             <td>{employee.id}</td>
//                             <td>{employee.firstName}</td>
//                             <td>{employee.lastName}</td>
//                             <td>{employee.email}</td>
//                             <td>
//                                 <Link
//                                     className="btn btn-info"
//                                     to={`/edit-employee/${employee.id}`}
//                                 >
//                                     Update
//                                 </Link>
//                                 <button
//                                     className="btn btn-danger"
//                                     onClick={() => deleteEmployee(employee.id)}
//                                     style={{ marginLeft: '10px' }}
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ListEmployeeComponent;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error("Error fetching employees:", error);
            });
    };

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId)
            .then((response) => {
                getAllEmployees(); // Refresh employee list
            })
            .catch((error) => {
                console.error("Error deleting employee:", error);
            });
    };

    return (
        <div className="container">
            <h2 className="text-center">List Employees</h2>
            <Link to="/add-employee" className="btn btn-primary mb-2">
                Add Employee
            </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <Link
                                    className="btn btn-info"
                                    to={`/edit-employee/${employee.id}`}
                                >
                                    Update
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteEmployee(employee.id)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;
