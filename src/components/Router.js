import { BrowserRouter } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import PageNotFound from "./PageNotFound";

const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path = "/" element = {<Home/>}/>
                    <Route exact path = "/employees" element = {<Employee/>}/>
                    <Route exact path = "*" element ={<PageNotFound/>}/>
                    <Route exact path = "/" element = {<EmployeeService/>}/> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;