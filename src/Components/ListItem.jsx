import React from 'react'

const ListItem = (props) => {
  return (
    <div className='w-full bg-white h-[8rem] sm:h-[5rem] rounded-lg relative overflow-hidden px-5 py-3 sm:pt-3 transition-all ease-in-out my-2'>
        <div className='absolute w-2 top-0 bottom-0 left-0 bg-green-400' />
        {props.children}
    </div>
  )
}

export default ListItem