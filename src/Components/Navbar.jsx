import React from 'react'
import sevayu from "../images/Sevayu.svg"

const Navbar = () => {
  return (
    <div className='flex justify-between px-[2%] sm:px-[5%]'>
        <img src={sevayu} alt="logo" className='sm:w-[8rem] w-[5rem] ml-3'></img>
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
