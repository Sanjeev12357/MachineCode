import React from 'react'

const Shimmer = () => {
  return Array(10).fill(0).map((n,i)=>(
    <div key={i} className='p-5 m-5 border border-black rounded-md '>
    
      <div className='h-64 w-64 bg-gray-200'></div>
      
    </div>
  ))
}

export default Shimmer