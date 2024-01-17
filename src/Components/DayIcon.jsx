import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDayList } from '../store/store'

const DayIcon = ({ day, initial }) => {

    const { daysList, setDaysList } = useDayList()

    const [active, setActive] = useState(false)

    const inactiveCss = "flex items-center justify-center rounded-full w-8 h-8 bg-gray-200"
    const activeCss = "flex items-center justify-center rounded-full w-8 h-8 bg-blue-500 text-white"

    const clickHandler = () => {
        setActive(prev => !prev)
    }
    
    useEffect(() => {
        if (!active) {
            setDaysList(daysList.filter(element => element!==day))
        } else {
            setDaysList([...daysList, day])
        }
    }, [active])

  return (
    <div onClick={clickHandler} 
         className={(active) ? activeCss : inactiveCss}>{initial}</div>
  )
}

export default DayIcon

