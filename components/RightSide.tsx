import React from 'react'

export const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6
    text-textLight'>
      <a href="mailto:shivarajput1506@gmail.com">
        <p className='text-sm rotate-90 w-96 tracking-widest text-textDark
        font-thin'>shivarajput1506@gmail.com</p>
      </a>
      <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
    </div>
  )
}

export default RightSide;