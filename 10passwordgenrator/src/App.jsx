import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenrator = useCallback( ()=>{
        let pass= "";
        let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
        if(numberAllowed) str += "1234567890";
        if (charAllowed)  str += "!@#$%^&*()_+-=[]{}}|:;";

        for (let index = 0; index < length; index++) {
          const char = Math.floor(Math.random() * str.length);
          pass += str.charAt(char);
        }
        setpassword(pass)

  },[length,numberAllowed,charAllowed])

  // useref code here 
  const passwordRef=useRef(null);

  const copyInputToClipboard=useCallback(()=>{
         passwordRef.current?.select();
         window.navigator.clipboard.writeText(password)
  },[password])



  useEffect(()=>{
    passwordGenrator()
  }
  ,[length,numberAllowed,charAllowed,passwordGenrator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg p-4 m-8 bg-gray-500 text-orange-500 align-center '>
           <h1>Password Genratot</h1> 
           <div className='flex overflow-hidden rounded-lg m-4'>
            
            <input 
              type="text"
              value={password}
              className='w-full outline-none py-1 px-3'
              placeholder='password'
              ref={passwordRef}
              readOnly
            />
            <button className='outline-none bg-green-600 text-white px-4 py-2'
            onClick={copyInputToClipboard}
            >copy</button>
            </div>
            
            <div className='flex text-sm gap-x-2'>
              <div className='flex gap-x-1 align-center'>
                <input 
                type="range"
                min={6} max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
                />
                <label >length: {length}</label>
              </div>

              <div className='flex align-center gap-x-2'>
                  <input 
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id='numberinput'
                  onChange={()=> { 
                    setnumberAllowed((prev) => !prev) 
                  }}
                   />
                   <label htmlFor="">NumAllowed</label>
              </div>
              
              <div className='flex align-center gap-x-1'>
                  <input 
                   type="checkbox"
                    defaultChecked={charAllowed}
                    id='charinput'
                    onChange={()=>{
                      setcharAllowed((prev) => !prev) 
                    }}
                  />
                  <label htmlFor="">charAllowed</label>
              </div>
            </div>
      </div>
    </>
  )
}



export default App
