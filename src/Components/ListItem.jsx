import React from 'react'

const ListItem = (props) => {

  // const css = `absolute w-2 top-0 bottom-0 left-0 bg-[${props.color[props.idx%3]}]` 
  const css = `absolute w-2 top-0 bottom-0 left-0 bg-pink-500` 

  const hoverHandler = () => props.setHovering(prev => true)
  const leaveHandler = () => props.setHovering(prev => false)

  return (
    <div onMouseOver={hoverHandler} onMouseLeave={leaveHandler} className='w-full bg-white h-[8rem] sm:h-[5rem] hover:h-[9rem] rounded-lg relative overflow-hidden px-5 py-3 sm:pt-3 transition-all ease-in-out my-2'>
        <div className={css} />
        {props.children}
        {console.log(css)}
    </div>
  )
}

export default ListItem
