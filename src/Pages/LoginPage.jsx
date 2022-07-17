import React,{useState} from "react"
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import {Button,Form} from 'react-bootstrap'
import firebase from "../Config/firebase"



function LoginPage(props){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data)=>{
        console.log("data",data)
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            console.log(responseUser.user.uid)
            if(responseUser.user.uid){
                props.setLogin(true)
            }
        }catch(e){
            console.log(e)
        }
    }

    return(
        <div className="">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email" type="email" name="email" register={{...register("email", { required: true})}} />
                <Input label="Contraseña" type="password" name="password" register={{...register("password", { required: true})}} />
                <Button type="submit" variant="primary">Registro</Button>
            </Form>
        </div>
    )
}

export default LoginPage