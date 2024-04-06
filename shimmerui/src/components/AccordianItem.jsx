import React, { useState } from 'react'

const AccordianItem = ({title,body,isOpen,setIsOpen}) => {

  return (
    <div className='border border-black '>
    <div onClick={()=>setIsOpen(!isOpen)} className='font-bold flex justify-between bg-slate-200 p-2'>
    {title} <span>⬇️</span>
    </div>
    {isOpen && <div className='p-2 transition-all duration-500 ease-linear'>{body}</div>}
    </div>
  )
}

export default AccordianItem