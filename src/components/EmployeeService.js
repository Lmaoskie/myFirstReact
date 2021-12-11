import EmployeeService from "../services/EmployeeService";
import httpClient from "./commons/http-common";

const getHello = () => {
    return hhtpClient.get('/hello');

}

const getEmployees = () => {
    return httpClient.get('/employees');
}


const postEmployee = (data) => {
    return httpClient.post("/employees", data);
}

const deleteEmployee = () => {
    return httpCommon.delete("/employee/employees/$(employeeid)")
}

export default (getEmployees, postEmployees, getEmployee, putEmployee, deleteEmployee);
