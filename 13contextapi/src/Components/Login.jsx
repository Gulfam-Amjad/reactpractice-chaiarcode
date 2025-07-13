import React from 'react'
import Usercontext from '../context/usercontext'
import { useContext } from 'react'

function login() {

    const {user}= useContext(Usercontext)
    
   if (!user) return <div>login again</div>;

   return <div>welcome {user.username}</div> 
  
}

export default login