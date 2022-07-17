import React, {useState} from 'react';
import AuthContext from "./AuthContext"
function AuthProvider(props){
    const [isLogin,setIsLogin] = useState(false)
    const loginUser=()=>{
        setIsLogin(true)
    }

    const logoutUser =()=>{
        setIsLogin(false)
    }
    return(
        <AuthContext.Provider
            value={{
                isLogin,
                loginUser,
                logoutUser
            }}
        >
        {props.children}


        </AuthContext.Provider>
    )
}

export default AuthProvider