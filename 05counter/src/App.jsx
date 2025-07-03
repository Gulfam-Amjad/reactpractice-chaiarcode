import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter= 15;
  const addvalue = () =>{
    // console.log("clicked", counter);
    // counter=counter + 1;
    if (counter<20) {
          setCounter(counter + 1 )
    }else{
     <div> "value is accessed 20"; </div>
    }

  }

  const decvalue=()=>{
    if (counter > 0) {
          setCounter(counter - 1 )
    }else{
       <div>"valu cant be nagative";</div>
    }
  }

  return (
    <>
    <h1>this is gulfam react</h1>
    <h3>number counter: {counter}</h3>
 
   <button
   onClick={addvalue}
   >increse value {counter}</button>
   <br />
   <br />
   <button
   onClick={decvalue}
   >decrese value {counter}</button>
   <br />
   <div>footer: {counter}</div>

    </>
  )
}

export default App
