import React from 'react'
import { useState, useContext } from 'react';
import Usercontextprovider from '../context/usercontextprovider';
import Usercontext from '../context/usercontext';

function Input() {
    const [username, setusername] = useState();
    const [password, setpassword] = useState();

    const {setuser}=useContext(Usercontext)

    const submitedbtn=(e)=>{
        e.preventDefault()
        setuser({username})
    }

  return (
    <>
    <input type="text"
    value={username}
    onChange={(e)=> setusername(e.target.value)}
    placeholder='username'/>

    <input type="password"
    value={password}
    onChange={(e)=> setpassword(e.target.value)}
    placeholder='password'/>

    <button type='submit'
         onClick={submitedbtn}
    >click</button>
    </>
  )
}

export default Input