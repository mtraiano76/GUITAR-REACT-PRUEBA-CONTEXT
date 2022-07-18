import React,{useState,useContext} from "react"
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import {Button,Form} from 'react-bootstrap'
import firebase from "../Config/firebase"
import AlertCustom from "../Components/AlertCustom";
import {loginMessage} from "../Components/Util/errorMessage"
import AuthContext from "../Context/AuthContext";
import {useNavigate} from "react-router-dom"
function LoginPage(props){
    const { register, handleSubmit } = useForm();
    const [alert,setAlert] = useState({variant:'',text:''})
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = async (data)=>{
        console.log("data",data)
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            console.log(responseUser.user.uid)
            if(responseUser.user.uid){
                const user = await firebase.db.collection("usuarios")
                .where("userId","==",responseUser.user.uid)
                .get()
                context.loginUser(user.docs[0].data())
                setAlert({variant:"success",text:"Bienvenido "+user.docs[0].data().name})
                navigate("/")
            }

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
                <AlertCustom {...alert} />
            </Form>
        </div>
    )
}

export default LoginPage