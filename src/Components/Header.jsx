import React from 'react'
import { Link } from 'react-router-dom'
import sevayu from "../images/Sevayu.svg"
import { useUserState } from '../store/store'


const Header = () => {

  const { unsetIsLoggedIn } = useUserState()
  const logoutHandler = () => {
    localStorage.removeItem("jwt")
    unsetIsLoggedIn()
  }

  return (
    <div className='flex justify-between px-[2%] sm:px-[5%] py-[2rem] border-b-[1px] border-[#b6b6b6]'>
      <Link to="/">
        <img src={sevayu} alt="logo" className='w-[8rem] ml-3'></img>
      </Link>
        <nav>
          <ul className='flex xl:gap-8 gap-5 transition-all ease-in-out visby px-2'>
            <Link to="/blogs">
              <a className='md:block hidden'>Blogs</a>
            </Link>
            <Link to="/">
              <a className='md:block hidden'>Dashboard</a>
            </Link>
            <Link to="/">
              <a onClick={logoutHandler} className='md:block hidden'>Logout</a>
            </Link>
          </ul>
        </nav>
    </div>
  )
}

export default Header
