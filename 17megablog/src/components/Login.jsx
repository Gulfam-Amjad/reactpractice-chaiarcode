import React from 'react'
import authservice from '../appwrite/auth'
import { logIn as storelogin } from '../store/authSlice'
import {logo, Button, Input} from './index'
import {useDispatch} from 'react-redux'
import {useNavigate, Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

function Login() {
  const navigate= useNavigate();
  const dispatch= useDispatch();
  const {register, handleSubmit} = useForm()
  const [error, seterror] = useState();

  const login = async(data)=>{
    try {
       const session = await authservice.login(data)
         if (session) {
          const userData = await authservice.getCurrentUser()
          if (userData) dispatch(storelogin(userData))
           navigate("/")
         }
    } catch (error) {
        console.log(error.message);
    }  
  }

  return (
    <div>Login</div>
  )
}

export default Login