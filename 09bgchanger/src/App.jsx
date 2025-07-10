import { useState } from "react"


function App() {
 
  const [color, setColor]=useState("black")

  return (
    <>
  <div className="w-full h-screen"
  style={{backgroundColor: color}}
  >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
      <div className="flex gap-3 flex-wrap px-3 py-2 shadow-xl justify-center rounded-2xl  bg-white">
        
       <button className="bg-yellow-600 p-2 text-white rounded-3xl"
       onClick={()=>setColor("yellow")}>
        yellow</button>

        <button className="bg-red-600 p-2 text-white rounded-3xl"
        onClick={()=>setColor("red")}>
        yellow</button>

        <button className="bg-pink-400 p-2 text-white rounded-3xl"
        onClick={()=>setColor("pink")}>
        yellow</button>

        <button className="bg-orange-400 p-2 text-white rounded-3xl"
        onClick={()=>setColor("orange")}>
        yellow</button>


      </div>
    </div>
  </div>
    </>
  )
}

export default App
