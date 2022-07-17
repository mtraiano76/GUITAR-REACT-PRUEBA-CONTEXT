import React from "react"
// import './Input.css'
import Form from 'react-bootstrap/Form'
// import classes from './Input.css'
const styles = {
    label:{
        backgroundColor:"red",
        marginLeft:"20px"
        // background-color
    }
}


function Input(props){
    const {label,type,name,placeholder,register} = props
    return(
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type || "text"} name={name} placeholder={placeholder || ""} {...register} />
        </Form.Group>  
    )
}
export default Input