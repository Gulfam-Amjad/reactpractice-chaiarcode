import React from 'react'
import {LogoutBtn, Logo, Container} from '../index'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {
    const navigate = useNavigate();
    const authStatus= useSelector((state)=> (state.auth.status))

    const navItems= [
      {
        name: "Home",
        slug: "/",
        active: true
      },
       {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
    ]

  return (
    <header className='py-3 shadow bg-gray-500'>
     <Container >
      <nav className='flex'>
        <div className='mr-4'>
          <Link to='/'>
            <Logo width ="70px"/>
          </Link>
        </div>
        
         <ul className='flex ml-auto'>
          {navItems.map((item)=> item.active ? (
            <li key={item.name}>
              <button 
              onClick={()=>navigate(item.slug)}
              className='inline-block px-6 py-2 rounded-full hover:bg-blue-100 duration-200'>
                {item.name} 
              </button>
            </li>
          ) :null )}

          {authStatus && (
            <li> <LogoutBtn /> </li>
          )
          }
         </ul>

      </nav>
     </Container> 
    </header>
  )
}

export default Header