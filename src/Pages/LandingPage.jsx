import React from 'react'
import Navbar from '../Components/Navbar'
import doctor from "../images/doctor.png"

const LandingPage = () => {
  return (
    <div className='mt-8'>
        <Navbar />

        <div className=' mx-auto w-10/12 mt-14 max-w-[75rem]'>
          <div className=' flex sm:block'>
            <p className=' text-6xl xl:ml-[-5rem] transition-all ease-in-out'>01</p>
            <p className='sm:hidden block text-3xl pl-5'>Get Quick <br /> Medical Serivce</p>
          </div>
          <div className='sm:mt-10 mt-[10rem]'>
            <div className=' pl-[50%] lg:text-5xl md:text-3xl transition-all ease-in-out sm:text-3xl'>
              <p className='sm:inline-block hidden'>Get Quick <br /> Medical Serivce</p>
            </div>
            <div className='w-full h-[15rem] pl-[5%] rounded-3xl bg-[#3B59FA] mt-10 relative'>
              <div className='w-[270px] bottom-0 h-[150%] xl:w-[320px] xl:h-[170%] absolute transition-all ease-in-out'>
                <img src={doctor} className=' h-full w-full'></img>
              </div>
                <div className='sm:block hidden'>
                  <div className=' pl-[45%] absolute top-[10%]'>
                    <p className='text-white text-2xl xl:text-[1.8rem] transition-all ease-in-out'>
                      Join us to get access <br /> to all the facilities
                    </p>
                    <nav className='mt-5 lg:pl-0 md:pl-1 sm:pl-10 transition-all ease-in-out'>
                      <button className='md:block lg:inline-block sm:block'>Login</button>
                      <button>Sign up</button>
                    </nav>
                  </div>
                </div>
            </div>
          </div>
        </div>

      <div className='mx-auto w-10/12 mt-14 max-w-[75rem]'>
        <div className=' flex sm:block'>
        <p className=' text-6xl xl:ml-[-5rem] transition-all ease-in-out'>02</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

