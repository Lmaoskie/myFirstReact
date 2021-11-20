import httpCommon from "../commons/http-common";

const getEmployees = () =>{
    return httpCommon.get('/employees')
}

export default {getHello, getHi};