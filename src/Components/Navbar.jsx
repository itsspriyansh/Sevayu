import React from 'react'
import { Link } from 'react-router-dom'
import sevayu from "../images/Sevayu.svg"

const Navbar = () => {
  return (
    <div className='flex justify-between px-[2%] sm:px-[5%] mt-[2rem]'>
      <Link to="/">
        <img src={sevayu} alt="logo" className='w-[8rem] ml-3'></img>
      </Link>
        <nav className='hidden sm:block'>
          <ul className='flex xl:gap-12 gap-5 transition-all ease-in-out'>
            <p>About</p>
            <p>Terms</p>
            <p>Contact</p>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
