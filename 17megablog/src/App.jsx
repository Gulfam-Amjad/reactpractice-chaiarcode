import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authservice from './appwrite/auth';
import { logIn, logOut } from './store/authSlice';
import './App.css'
import { Header, Footer } from './components';


function App() {
   const [loading, setloading] = useState();
   const dispatch = useDispatch()

   useEffect(() => {
       authservice.getCurrentUser()
       .then((userData)=>{
        if (userData) {
           dispatch(logIn(userData))
        }else{
           dispatch(logOut())
        }
       })
       .finally(setloading(false))
   }, []);

    return !loading ? (
      <div className='min-h-screen flex flex-wrap bg-gray-400 content-between'>
          <div className='w-full block'>
               <Header />
               <main>
                {/* outlet */}
               </main>
               <Footer />
          </div>
      </div>
    ) : null
}

export default App
