import React,{useState} from "react"
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import {Button,Form} from 'react-bootstrap'
import firebase from "../Config/firebase"
import AlertCustom from "../Components/AlertCustom";
import {loginMessage} from "../Components/Util/errorMessage"



function LoginPage(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ alert,setAlert]=useState({variant:"",text:""})
    const onSubmit = async (data)=>{
        console.log("data",data)
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            console.log(responseUser.user.uid)
            setAlert({variant:"success",text:"Bienvenido"})
        }catch(e){
            console.log(e.code)
            if(e.code==="auth/user-not-found"){

            }
            setAlert({variant:"danger",text:loginMessage[e.code] || "Ha ocurrido un error"})
        }
    }

    return(
        <div className="">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email" type="email" name="email" register={{...register("email", { required: true})}} />
                <Input label="Contraseña" type="password" name="password" register={{...register("password", { required: true})}} />
                <Button type="submit" variant="primary">Ingresar</Button>
                <AlertCustom variant={alert.variant} text={alert.text}/>
            </Form>
        </div>
    )
}

export default LoginPage