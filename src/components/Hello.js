import {useEffect, useState} from "react";
import helloService from "../services/helloServices"


const Hello = () => {
    const [hello, setHello] = useState("testttttt")

    useEffect(() => {
        helloService.getHello()
        .then(
            response => {
                setHello(response.data);
            }
        )
        .catch(
            err => {
                console.log("Something went Wrong")
            }
        )
    })
    return hello;
}

export default Hello;

