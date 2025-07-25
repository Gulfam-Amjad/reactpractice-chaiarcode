import React from 'react'
import authservice from '../../appwrite/auth'
import { logOut } from '../../store/authSlice'
import {useDispatch} from 'react-redux'

function LogoutBtn() {
    
    const dispatch= useDispatch()

    const logoutHandler=()=>{
        authservice.logout().then(()=>{
            dispatch(logOut())
        })
    }

  return (
      <button className='inline-block px-6 py-3 duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandler}
      >
        Logout
      </button>
  )
}

export default LogoutBtn