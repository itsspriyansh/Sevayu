import React from 'react'
import { Link } from 'react-router-dom'
import sevayu from "../images/Sevayu.svg"

const Header = () => {
  return (
    <div className='flex justify-between px-[2%] sm:px-[5%] py-[2rem] border-b-[1px] border-[#b6b6b6]'>
      <Link to="/">
        <img src={sevayu} alt="logo" className='w-[8rem] ml-3'></img>
      </Link>
        <nav className='hidden sm:block'>
          <ul className='flex xl:gap-12 gap-5 transition-all ease-in-out visby'>
            <p className='md:block hidden'>Logout</p>
            <p className='block md:hidden'>menu</p>
          </ul>
        </nav>
    </div>
  )
}

export default Header
