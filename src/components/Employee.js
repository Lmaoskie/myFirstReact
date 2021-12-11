import {useEffect, useState} from "react";
import EmployeeService from "../services/EmployeeService";


const Employee = () => {
    //function hooks
    const [employees, setEmployee] = useState([])

    //hooks
    useEffect(() => {
        EmployeeService.getEmployees()  //promises
        .then(
            response => {
                setEmployee(response.data);
            }
        )
        .catch(
            err => {
                console.log("Something went Wrong")
            }
        )
    })
    return (
        <div>
        <h3>List of Employees </h3>
        <div>
        <table border ="1" className = "table table-hover table-light table-bordered">
           <thead>
           <tr classname = "table-danger">
                <td>Name</td>
                <td>Department</td>
                <td>Location</td>
                <td>Action</td>
            </tr>
           </thead>
           <tbody>
            {
                employees.map(
                    employee => 
                        <tr key = {employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                        <td>{employee.location}</td> 
                        <td>
                            <Link className = "btn btn-primary" to ={"/employees/edit/$(employeeId)"}>Update</Link>
                            <button className = "btn btn-danger" onclick ={(e) => deleteEmployee(employee.id)}>Delete</button>
                        </td>

                        </tr>
                    
                )

                }
            </tbody>
        </table>
        </div>
        </div>
    )
}

export default Employee;

