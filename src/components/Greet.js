
const Greet = (props)  =>{
    
    return(
        <div>
     <h1>Hello {props.name + "Adriane"} a.k.a {props.heroName}</h1>
    {props.children}
    </div>
)
}
export default Greet

/*
const Greet = (props)  => {
    return <h1>Hello Adriane</h1>
}
const Message = () =>
{
    return <p>This is a props children
}

const Greet = (props)  =>{
    return(
        <div>
     <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
    </div>
)
}

const Message = () =>
{
    return <p>This is a props children,</p>
}
export default Message
export default Greet
*/