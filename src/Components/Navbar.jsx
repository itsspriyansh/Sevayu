import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-[2%] sm:px-[5%]'>
        <span>Sevayu</span>
        <nav className='hidden sm:block'>
          <ul className='flex gap-4'>
            <p>About</p>
            <p>Terms</p>
            <p>Contact</p>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
