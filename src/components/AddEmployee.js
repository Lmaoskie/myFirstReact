import { useState } from "react";
import { useNavigate, useParams} from "react-router";
import EmployeeService from "./services/employee.service";

const AddEmployee = () => {
    const[name, setName] = useState("");
    const[location, setLocation] = useState("");
    const[department, setDepartment] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();
        //addEmployee
        EmployeeService.postEmployee(employee)
        .then(response => {
            console.log("employee added!", response.data);
            navigate("/employees");
    })
    .catch(error =>{
        console.log("Something Went Wrong!");
    })
  }
  

}
export default AddEmployee;