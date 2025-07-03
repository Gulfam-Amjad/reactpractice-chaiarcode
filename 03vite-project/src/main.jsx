import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function Myapp(){
   return(
    <h1>yes ! is a my app ...
    </h1>
   )
}

const objhere=React.createElement(
  'a',
  {href: 'https://google.com',targer: '_blank'},
  'click me to google'
)

createRoot(document.getElementById('root')).render(

     objhere

)
