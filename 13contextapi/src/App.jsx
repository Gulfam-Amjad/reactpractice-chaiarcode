import { useState } from 'react'
import './App.css'
import Usercontext from './context/usercontext'
import Login from './components/login'
import Input from './components/input'
import Usercontextprovider from './context/usercontextprovider'

function App() {

  return (
    <Usercontextprovider>
        <h1>hey its gulfam bro</h1>
        <br />
        <Login />
        <br />
        <Input />
    </Usercontextprovider>
  )
}

export default App
