import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

  const css = "text-[#FF008A]"
  const location = useLocation()


  return (
    <div>
        <ul className='flex flex-col items-start justify justify-center gap-12 visby'>
          <Link to="/">
            <li className={location.pathname==="/" ? css : ""}>Appointments</li>
          </Link>
          <Link to="/medical-tests">
            <li className={location.pathname==="/medical-tests" ? css : ""}>Medical Tests</li>
          </Link>
          <Link to="/doctors">
            <li className={location.pathname==="/doctors" ? css : ""}>Doctors</li>
          </Link>
          <Link to="/add-appointment">
            <li className={location.pathname==="/add-appointment" ? css : ""}>Add Appointment</li>
          </Link>
          <Link to="/blood-bank">
            <li className={location.pathname==="/blood-bank" ? css : ""}>Blood Bank</li>
          </Link>
        </ul>
    </div>
  )
}

export default Sidebar
